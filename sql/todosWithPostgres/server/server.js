const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// cross origin resource sharing.  module sends
//   cors headers that allow pulling data from
//   a url containing difference in any of 
//   protocol://hostname:port
const cors = require('cors')
app.use(cors())

// process environment setting takes priority which
// allows setting a different port if needed by the
// deployer of this code
const port = process.env.PORT || 3000;

app.use(express.static('../client'))

// use pg (node-postgres) to connect to postgres
const {Client} = require('pg')

//connection settings

let connectionObject = {
  host : "pgdb.accsoftwarebootcamp.com",
  database : "accsoftwarebootcamp",
  port : 5432,
  user : "acc",
  password : "accrocks"
}

//create a connection handle to the db
const client = new Client(connectionObject)

//connect to db
client.connect()
.then(function(){ 
  console.log(`Connected to the ${client.database} db`)
})
.catch(function(err){
  console.log(`connection error: ${err.stack}`)
})




// default root route.  this needs to be removed so that
// the client app can be launched from ./../client folder
app.get("/", function(req, res) {
  res.send("Hello");
});

// Read data
app.get("/todos", function(req, res) {
  let query =`SELECT id as "_id",
                   description,
                   iscomplete as "isComplete"
               FROM todos.todos`

   client.query(query, function(err, todos) {
       if(err) {
           console.log('Error: ', err);
           res.status(404).send(`Error happened while querying /todos: `)
       };
       res.json(todos.rows);
   })

});

// Create data
app.post("/todos", function(req, res) {
  //get the text of the todo from the body
  // we decided to trim the incoming todo description
  let newDescription = req.body.description.trim();

  // if the todo description is "", undefined or null send an appropriate error
  if(!newDescription) {
    res.status(411).json({code: 123455, message: 'Empty todo received'})
 } else {
        //form a database query
       let query = `INSERT INTO todos.todos
                   (description, iscomplete, user_id)
               VALUES ('${newDescription}', false, 12)
               RETURNING *`;
                //send a query to the database
               client.query(query, function(err, todos){
                if(err) {
                    console.log('Error: ', err);
                    res.status(404).json({code: 1234, message: 'Error while posting: ' + err});
                } else {
                  //add a _id property just in case our client needs it
                  todos.rows[0]._id = todos.rows[0].id
                  //pg returns an array hence we need to send the object within it
                res.json(todos.rows[0]);
              }
            })
 }
});

// Delete data
app.delete("/todos/:id", (req, res) => {
  let todoId = parseInt(req.params.id);
  let query = `
    DELETE FROM todos.todos
    WHERE id = ${todoId}`

  client.query(query, function(err, todos){
    if(err) {
      console.log('Error: ',err.stack)
      res.status(404).json({code:1245, message: `Error while deleting todo: ${todoId}`})
    } else{
      res.end();
    }
  })
});

// Update
app.put("/todos/:id", (req, res) => {
    let todoId = parseInt(req.params.id);
    let query = `
    UPDATE todos.todos SET
    iscomplete = NOT iscomplete
    WHERE id = ${todoId}`

    client.query(query, function(err, todos){
      if(err) {
        console.log('Error: ',err.stack)
        res.status(404).json({code:1255, message: `Error while updating todo: ${todoId}`})
      } else {
        res.json(todos.rows)
      }
    })
})

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
