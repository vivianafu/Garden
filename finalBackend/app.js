// const db2 = require('./dbconnection')
//import 
const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const app = express() 
const session = require('express-session')
const jwt = require('jsonwebtoken')

//import Route
// const authRoute = require('./routes/auth')
const prodRoute = require('./routes/products')
const courseRoute =require('./routes/courses')
const memberRoute = require('./routes/member_route')
const purchaseRoute = require('./routes/purchase')
const orderRoute = require('./routes/orderLists')

app.listen(3001, console.log("Listening on port 3001"))

app.use(cors())

//Mongoose Database connection
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/final_project',{useNewUrlParser:true, useUnifiedTopology:true})
const db = mongoose.connection;
db.once('open', ()=>{ console.log("connect to mongodb...") })

// set session

//use parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//error message handler
app.use((err, req, res, next) =>{
    res.status(err.status || 500)
    res.send({
        error:{
            status:err.status || 500,
            message:err.message
        },
    })
})

//Mongo Route
app.use('/courses', courseRoute)
app.use('/members', memberRoute )
app.use('/products', prodRoute)
app.use('/purchase',purchaseRoute)
app.use('/orderList', orderRoute)
// app.use('/member', routeMember) //保護路由

