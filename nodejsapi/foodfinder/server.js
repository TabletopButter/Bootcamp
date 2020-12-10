const { response } = require('express');
const express = require('express');
const app = express();
const yelp = require('yelp-fusion');
const client = yelp.client('OgYJmJGv7bSns-46rpofRcTpJMw6z9RG4lE3vNzFDRViPcGa8Ve2E6_BGocvzx03TmF2rUZTMC8LFGDm2qsocRQSD0t8JNfRNs7yqpIhcunEgRnCnqaOGDFhs3vRX3Yx');

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));


app.get("/", (req, res)=>{
    res.render("index.ejs")
})

app.get("/results", (req, res)=>{
    let city = req.query.city
    
    client.search({
        location: city,
        limit:10
      }).then(response => {
        // console.log(response.jsonBody.businesses);
        res.render("results.ejs", {data: response.jsonBody.businesses})
      }).catch(e => {
        console.log(e);
      });  
})

app.listen(PORT, console.log(`App is listening on port ${PORT}.`))