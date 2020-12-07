const express = require('express');
const app = express();
const $fetch = require('node-fetch');

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

let image = `https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg`
const endpoint = `https://dog.ceo/api/breeds/image/random`

app.get('/', (req, res)=>{
    res.render("home.ejs", {image: image})
})

app.get('/getImage', (req, res)=>{
    $fetch(endpoint) //step 1 - go to (fetch) url, endpoint
    .then(response =>{
        if(response.ok)
        return response.json()

        throw Error("There was an error")
    })
    .then(data => res.render('home.ejs', {image: data.message}))
    .catch(error => {
        res.render('home.ejs', {image: '', error: error})
        // res.send(`Error: ${error}`)
    })
})

app.listen(PORT, ()=> console.log(`App listening on port ${PORT}.`))