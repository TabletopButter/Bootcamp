const express = require('express');
const app = express();
const request = require('request');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.render("home.ejs");
})

let endpoint = `https://www.metaweather.com/api/location/2487956/`

app.get("/results", (req, res)=>{
    // 1) calling, getting url - endpoint
    // 2) getting JSON and parsing into an object
    // 3) do something with that object
    // 4) error handling

    request(endpoint, function(error, response, body){
        //do stuff
        // console.log(response) 
        // console.log(body)
        // JSON.parse(body)
        if(!error && response.statusCode == 200){
            res.render('results.ejs', {data:JSON.parse(body)})
        }

        // res.render('error.ejs') <- If you had an error page
        
        
    })
})

app.listen(PORT, ()=> console.log(`App is listening on port ${PORT}.`));