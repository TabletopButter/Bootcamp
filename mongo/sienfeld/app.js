// 1) Connection
const mongoose = require('mongoose')
const chalk = require('chalk')

const dbConfig = require('./config')
const { getMaxListeners } = require('process')

let{url, db, authInfo} = dbConfig.person
let connection = `${url}/${db}`

mongoose.connect(connection, authInfo)
.then(()=> console.log(chalk.blueBright(`Connected to the ${connection}`)))
.catch(err => console.log(chalk.redBright(`Issues connecting to ${connection}: ${err}`)))

// 2) Build blueprents
//      a) Schema
//      b) Model

let userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Name is required!']
    },
    age: {
        type:Number,
        default: 999
    },
    email: String,
        created: {
        type:Date,
        default: Date.now()
        
    }
})




// let userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     email: String
// })

var UserModel = mongoose.model('users',userSchema)


//  3) Write queries

//db.collection.insert({})

// var User = new UserModel({
//     name: "Jerry",
//     age: 45,
//     email: 'jerrySeinfeld@gmail.com'
// })

// var User = new UserModel({
//     name: "George",
//     age: 43,
//     email: 'George@gmail.com'
// })

// User.save((err, user)=>{
//     if(err){
//         console.log(chalk.redBright('There was an error saving data.'))
//     } else {
//         console.log(chalk.greenBright('Data was saved.'))
//         console.log(user)
//     }
// })

UserModel.create({
    name: 'Elaine',
    age:39,
    email: 'Elaine@yahoo.com'
},
    function(err, user){
        if(err){
            console.log(chalk.redBright('There was an error saving data.'))
        } else {
            console.log(chalk.greenBright('Data was saved.'))
            console.log(user)
        }
    }
)

// db.users.find({})

UserModel.find({}, (err, users)=>{
    err ? 
        console.log(chalk.redBright('Error finding documents: '+err))
        : console.log(chalk.greenBright('Here are all your documents '+users))
})