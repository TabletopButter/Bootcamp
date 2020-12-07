const { response } = require('express');
const express = require('express');
const app = express();
const $fetch = require('node-fetch');

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// https://api.lyrics.ovh/v1/artist/title


app.get('/', (req, res)=>{
    res.render("home.ejs")
})

app.get('/results', (req, res)=>{
    let baseUrl = `https://api.lyrics.ovh/v1`
    let artist = req.query.artist
    let title = req.query.title
    let endpoint = `${baseUrl}/${artist}/${title}`

    $fetch(endpoint)
    .then(response => {
        response.json()
    })
    .then(data => {
        let theLyrics = data.lyrics.replace(/\n/gi, '<br>')
        res.render('lyricsResults.ejs', {lyrics: theLyrics})
    })
    .catch(error =>{
        res.render('error.ejs', {error: "No Matches Found"})
    })

})

app.listen(PORT, () => console.log(`App is listening on port ${PORT}.`));

// When you do a get request the data is most likely exposed where people can see it, you dont use a get request to get sensitive data
//  Use Post for sensitive data, Post method does not cache the data
// Get methods store the data locally