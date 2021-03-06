const express = require("express");
const app = express ();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
//strategy that allows us to auth with username/password
const LocalStrategy = require('passport-local');
//PLM allows us to use passport local strategy with mongoose
// as a library to store in MongoDB
const passportLocalMongoose = require('passport-local-mongoose');

//var connstr = `mongodb://accadmin:acc_rocks_2020@mongo.accsoftwarebootcamp.com/ac_passport`

const configData = {
    url: 'mongodb://mongo.accsoftwarebootcamp.com',
    db: 'ac_passport',
    authInfo:{
        user: 'accadmin',
        pass: 'acc_rocks_2020',
        auth: {
            authSource:'admin'
        },
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
 }

 let {url, db, authInfo} = configData;
 let connection = `${url}/${db}`
 

// mongoose.connect(connstr,
//     {useNewUrlParser:true,
//     useUnifiedTopology:true},
//     function(err) {
//         if(err) {console.log(err)}
//         else {
//     console.log(`Connected to mongo at : ${connstr}`)}
//     })

mongoose.connect(connection, authInfo)
.then(()=> console.log(`Connected to the ${connection}`))
.catch(err => {
  console.log(`Issues connecting to ${connection}: ${err}`)
  process.exit()
})

var User = require("./models/user");
const { AttemptTooSoonError } = require("passport-local-mongoose/lib/errors");

// load session middleware in the app object
app.use(require('express-session')({
    secret:"Blah blah blah", //used to encrypt the user info before saving to db
    resave:false,            // save the sesion obj even if not changed
    saveUninitialized:false  // save teh session obj even if no tinitialized
}));

// generates middleware functions from passport core library, and loading to the app
app.use(passport.initialize());

//genetes middleware functions from the session core library, and loading to the app
app.use(passport.session());

//loading authentication functions, and localStrategy functions to our passport object
passport.use(new LocalStrategy(User.authenticate()));

// load the functions to save to db, into the passport obj
passport.serializeUser(User.serializeUser());

//load the functions to read from db, into the passport obj
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req,res){
    res.render("home.ejs")
});

app.get("/newsfeed", isLoggedIn, function(req,res){
    res.render("newsfeed.ejs");
})

app.get("/signup", function(req,res){
    res.render("signup.ejs")
})

app.post("/signup", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("signup.ejs")
        } else {
            passport.authenticate("local")(req,res,function(){
                res.redirect("/newsfeed");
            })
        }
    })
})

app.get("/login", function(req,res) {
    res.render("login.ejs")
})

app.post("/login", passport.authenticate('local',
    {
        successRedirect: '/newsfeed',
        failureRedirect: '/login',
    }), function(req,res){
        //We don't need anything in our callback function
    })

//passport.autheticate is known as Express 'middleware'
//Middleware is code that runs before callback function

app.get('/logout', function(req,res){
    req.logout();
    res.redirect('/');
})

//When we logout, Passport destroys all user data in the session. Then we redirect them to the home page

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

app.listen(PORT, function(){
    console.log(`App is listening on port ${PORT}`);
})