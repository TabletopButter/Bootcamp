const express = require('express');
const app = express();
const $fetch = require('node-fetch');

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Now playing documentation - https://developers.themoviedb.org/3/movies/get-now-playing

let endpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=2fa1189625f56e9fe64f1ef5c5c8b681&language=en-US&page=1&region=US`


app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.get('/results', (req, res)=>{
    $fetch(endpoint)
    .then(response => response.json())
    .then(data => { 
        // arrT=[]
        // arrP=[]

        // data.results.forEach(el => arrT.push(el.title))
        // data.results.forEach(el => arrP.push(el.poster_path))

    //    console.log(arrT)
    //    console.log(arrP)

    //    res.render("results.ejs", {movies: arrT, arrP})

        res.render("results.ejs", {movies: data.results})
    })
    .catch()

})

app.listen(PORT, ()=> console.log(`App is listening on port ${PORT}.`));