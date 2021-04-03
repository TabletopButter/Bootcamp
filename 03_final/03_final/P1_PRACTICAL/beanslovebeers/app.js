const {response} = require('express')
const express = require('express');
const app = express();
const $fetch = require('node-fetch')

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

let mainEndpoint = `https://api.punkapi.com/v2/beers`

app.get("/", (req, res) =>{
    
    //grabbing 6 beers

    let indexBeeer = `https://api.punkapi.com/v2/beers?ids="|1|2|3|4|5|6|"`

    $fetch(mainEndpoint)
    .then(response => response.json())
    .then(data => {
        res.render("index.ejs", {beer: data})
    })
    .catch

})


app.get('/results', (req, res) => {
   
    let searhBeer = req.query.beer

    let searchBeerEndpoint = `${mainEndpoint}?beer_name=${searhBeer}`

    $fetch(searchBeerEndpoint)
    .then(response => response.json())
    .then(data => {
        res.render("results.ejs", {beers: data})
    })
    .catch()
})



app.listen(PORT, ()=> {
    console.log(`App is listening on port ${PORT}.`)
})


