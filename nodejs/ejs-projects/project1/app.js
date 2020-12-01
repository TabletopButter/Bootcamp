const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

let pizza = "I like pizza with extra pineapple.";
let cappucciono = "I like my cappuccino to be sweet";
let fries = "I like my fries crispy with extra salt";

app.get('/', (req, res)=>{
    let pizza = ["I like my pizza with extra pineapple."];
    res.render("home.ejs", {pizza});
})

app.get("/about", (req, res)=>{

    let cappuccino = ["I like my cappuccino to be sweet."];
    res.render("about.ejs",{cappuccino});
})

app.get("/contact", (req, res)=>{
    let fries = ["I like my fries crispy with extra salt."];
    res.render("contact.ejs", {fries});
})


app.listen(PORT, ()=> console.log(`App listening on port ${PORT}.`));