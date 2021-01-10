const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors())

app.use(express.static('../client'))

const chalk = require('chalk')

const port = process.env.PORT || 3000;

const mongoose = require('mongoose')

// Make connection
const dbConfig = require('./config')
let {url, db, authInfo} = dbConfig.configData
let connection = `${url}/${db}`

mongoose.connect(connection, authInfo)
.then(()=> console.log(chalk.yellowBright(`Connected to the ${connection}`)))
.catch(err => {
  console.log(chalk.redBright(`Issues connecting to ${connection}: ${err}`))
  process.exit()
})

// Blueprint - Schema & Model

let todoSchema = new mongoose.Schema({
  description:{
    type: String,
    required: [true, 'Must have a description!']
  },
  isComplete: {
    type:Boolean,
    default: false
  }
})

let TodoModel = mongoose.model('todos',todoSchema)

// Make queries
//  Read - find All in dB
//  Post - create new object in dB based on id
//  Put -
//  Delete



// let toDoArray = [
//   { id: 1, description: "Call mom", isComplete: false },
//   { id: 2, description: "Buy groceries", isComplete: false },
//   { id: 3, description: "Go to movies", isComplete: false }
// ];

// let num = 4;

app.get("/", function(req, res) {
  res.send("Hello");
});

// Read data
app.get("/todos", function(req, res) {
  TodoModel.find({}, (error, results)=>{
    if(error){
      console.log(chalk.redBright('There was an error finding docs from db'+ error))
    } else {
      console.log(chalk.greenBright('Results: '+ results))
      res.json(results);
    }
  })
});

// Create data
app.post("/todos", function(req, res) {

  let newTodo = new TodoModel({
    description: req.body.description
  })

  newTodo.save((error, result)=>{
    if(error){
      console.log(chalk.redBright('There was an error saving data to db'+ error))
    } else {
      console.log(chalk.greenBright('Result:' + result))
      res.status(201).json(result);
    }
  })
});

// Delete data
app.delete("/todos/:id", (req, res) => {

  let requestedToDoId = req.params.id;

  TodoModel.findByIdAndDelete(requestedToDoId, (error, result)=>{
    if(error){
      res.status(400).send('Id does not exist for deletion')
    } else {
      res.status(201).send(result)
    }
  })
});

// Update
app.put("/todos/:id", (req, res) => {
  
  let requestedToDoId = req.params.id;

  TodoModel.findById(requestedToDoId, (error, result)=>{
    if(error){
      res.status(400).send({statusCode:1234, message:" Cannot find id to update"})
    } else {
      result.isComplete = !result.isComplete
      result.save((err, updatedTodo)=>{
        if(err){
          res.status(400).send({statusCode:1235, message:" Unable to update in db."})
        } else {
          res.status(200).send(updatedTodo)
        }
      })
    }    
  })
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
