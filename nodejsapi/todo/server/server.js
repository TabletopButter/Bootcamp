const express = require('express')
const app = express()

const logger = require('morgan')
app.use(logger('dev'))

const cors=require("cors")
app.use(cors())

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static('../client'))

const PORT = process.env.PORT || 3000

let toDoArray = [
    {
        id: 1,
        description: 'Call Mom',
        isComplete: false
    },
    {
        id: 2,
        description: 'Buy Groceries',
        isComplete: false
    },
    {
        id: 3,
        description: 'Go to the Movies',
        isComplete: false
    }
]

app.get('/', (req, res)=>{
    res.send('I am the root route')
})

// CRUD

// R - Read  - GET method
app.get('/todos', (req, res)=>{
    res.json(toDoArray)
})

let num = 4
// C - Create - POST method
app.post('/todos', (req, res)=>{
    let newTodo =
        {
            id: num++,
            description: req.body.description,
            isComplete: false
        }
    toDoArray.push(newTodo)
    res.status(222).json(newTodo)
})

// D - Delete - DELETE method 
app.delete('/todos/:id', (req, res)=>{
    let requestedTodoId = parseInt(req.params.id)
    let requestedTodoIndex = toDoArray.findIndex(function(todo){
        return todo.id === requestedTodoId
    })

    if(requestedTodoIndex >= 0){
        let deletedTodo = toDoArray.splice(requestedTodoIndex, 1)
        res.status(223).send(deletedTodo)
    } else {
        res.status(666).send('ID does not exist for deleting on backend')
    }  
})


// U - Update - PUT method - /todos/:id
app.put('/todos/:id', (req, res)=>{
    let requestedTodoId = parseInt(req.params.id)
    let requestedTodo = toDoArray.find(function(todo){
        return todo.id === requestedTodoId
    })

    if(requestedTodo !== undefined){
        requestedTodo.isComplete = !requestedTodo.isComplete
        res.status(224).send(requestedTodo)
    } else {
        res.status(667).send('ID does not exist for PUT backend')
    }
})

app.listen(PORT, ()=> console.log(`App listening on port ${PORT}.`))