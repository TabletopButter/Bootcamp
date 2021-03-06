const express = require('express');
var app = express()


//custom middleware
function middleware_1(req, res, next) {
    req.newProperty='property value is 1'
    next()
}

//another custom middleware
function middleware_2(req,res, next) {
    req.newProperty = 'updated: property value 2'
    next()
}

app.get('/', middleware_1, middleware_2, function(req,res,next){
    res.send(`<h1>Custom property value :${req.newProperty}.</h1>`)
})

app.listen(3001, function(){
    console.log('middleware is listening on port 3001')
})

