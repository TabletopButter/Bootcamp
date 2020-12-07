const express = require('express');
const app = express();
const $fetch = require('node-fetch');

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

//https://api.coindesk.com/v1/bpi/currentprice.json

// const endpoint = `https://api.coindesk.com/v1/bpi/currentprice.json`

app.get('/', (req, res)=>{
    res.render("index.ejs", {price: "", symbol:""})
})

app.get('/getRates', (req, res)=>{
    // console.log(req.query.currency)
    let money = req.query.currency  
    
    $fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    .then(response => response.json())
    .then(data => {
        let moneyVal = data.bpi[money].rate_float.toFixed(2);
        let symbol = data.bpi[money].symbol;
        res.render("index.ejs", {price: moneyVal, symbol: symbol})

    })
    .catch()
})

app.listen(PORT, ()=> console.log(`App is listening on port ${PORT}.`));
