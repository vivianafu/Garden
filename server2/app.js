const express = require('express')
const mongoose = require('mongoose')
const app = express() 
const productsRoute = require('./routes/products')
const cors = require("cors")

app.listen(3001, console.log("Listening on port 3001"))

const corsOptions = { 
    origin:"http://localhost:3000"
}
app.use(cors(corsOptions));
//Database connection
mongoose.connect('mongodb://localhost/Prod',{useNewUrlParser:true, useUnifiedTopology:true})

const db = mongoose.connection;


//$brew services start mongodb-community
db.once('open', ()=>{
 console.log("connect to mongodb...")
})

//use parser
app.use(express.json())

//test
app.get('/',(req,res)=>{res.send('Hello world')})

//ProductRoute
app.use('/products',productsRoute)


