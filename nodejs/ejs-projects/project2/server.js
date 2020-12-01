const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));


app.get("/", (req, res)=>{
    res.send("I am the route route");
})

app.get('/messages', (req, res)=>{
    messages = [
        {name: "Jim", message: "I'm a cartoonist"},
        {name: "Jane", message: "How about pasta for dinner?"},
        {name: "Gary", message: "I like my pasta with butter"}
     ];
    res.render("messages.ejs", {messages});
})



app.listen(PORT, ()=> console.log(`App listening on port ${PORT}.`));