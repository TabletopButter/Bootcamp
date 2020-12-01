//Foundation

const express = require("express");
const app = express();
const port = 3000;

// ROute handlers
// "/" -> Route Route is localhost
// Response, ending the request response cycle
// res.end, res.end, res.render, res.json

app.get("/", function(request, response){
    response.send("Yeah! My first response!!")
})  

app.get("/kiwi", function(request, response){
    response.send("I like kiwis")
})  

app.get("/strawberry", function(request, response){
    response.send("I like strawberries")
})  

//Paramenter, variable inside the url
app.get("/:animal", function(req, res){
    res.send('I like '+req.params.animal)
})


// Catch All, if nothing matches the request send this
app.get("*", function(request, response){
    response.send("I like food")
})  

// Listeners
app.listen(port, function(){
    console.log('App running on port 3000.')
});