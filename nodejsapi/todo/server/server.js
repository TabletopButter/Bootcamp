const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send("I am the root route!");
})


// todos
// todos/:id


// CRUD
// C-Create -> Use the POST method
// R - Read -> Use the GET method
// U - Update -> Use the PUT method
// D - Delete - > Use the DELETE method

app.get('/todos', (req, res)=>{
    res.json(todoArray)
})

app.post('/todos', (req, res)=>{

    let newTodo = {
        id: 4,
        description: "Buy more stuff",
        isComplete: false
    }
    todoArray.push(newTodo);

    res.status(201).json(newTodo);

})

app.delete('/todos/:id', (req, res)=>{
    let requestedTodoId = parseInt(req.params.id)
    let requestedTodoIndex = todoArray.findIndex(function(todo){
        return todo.id === requestedTodoId
    })

    if(requestedTodoIndex >= 0){
        todoArray.splice(requestedTodoIndex, 1)
        res.send(todoArray)
    } else {
        res.send("ID does not exist")
    }

    

})


app.listen(PORT, ()=> console.log(`App is running on port ${PORT}.`));

let todoArray = [
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