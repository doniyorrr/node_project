const express = require("express")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const rIndex = require('./routers/index')
const rAdd = require('./routers/add')
const chalk = require('chalk')
const port = 3000
const app = express()

// mongoose settings
mongoose.connect('mongodb+srv://doniyor:123qwe123qwe@cluster0.mgnqw.mongodb.net/test');

const db = mongoose.connection
db.on('open' , ()=>{
    console.log(chalk.bgGreen.red("Mongoose running "))
})
db.on('error' , (err)=>{
    console.log(chalk.red("Mongoose ERROR running " ,err))
})

// bodyParser settings
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.set('view engine' , 'pug')
app.set('views' , path.join(__dirname , 'views'))

app.use(express.static(path.join(__dirname , 'public')))


app.use(rIndex)
app.use(rAdd)


app.listen(port , (err , data)=>{
    console.log(`server http://localhost:${port} da ishladi`)
})


