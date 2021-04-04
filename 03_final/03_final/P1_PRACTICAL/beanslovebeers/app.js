const {response} = require('express')
const express = require('express');
const app = express();
const $fetch = require('node-fetch')

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

let mainEndpoint = `https://api.punkapi.com/v2/beers` // main endpoint that get scalls

app.get("/", (req, res) =>{


    let indexBeeer = `https://api.punkapi.com/v2/beers?ids="|1|2|3|4|5|6|"` //grabs starting beers to start with to displa yon the main page

    $fetch(mainEndpoint)      //calls teh endpoint
    .then(response => response.json())
    .then(data => {
        res.render("index.ejs", {beer: data}) //sends the data to the index.ejs page
    })
    .catch

})


app.get('/results', (req, res) => {
   
    let searhBeer = req.query.beer   //grabs the input from the search field

    let searchBeerEndpoint = `${mainEndpoint}?beer_name=${searhBeer}` //sets the endpoint to search for the beername

    $fetch(searchBeerEndpoint)
    .then(response => response.json())
    .then(data => {
        res.render("results.ejs", {beers: data})  //sends the data to the results.ejs page
    })
    .catch()
})



app.listen(PORT, ()=> {
    console.log(`App is listening on port ${PORT}.`)
})


