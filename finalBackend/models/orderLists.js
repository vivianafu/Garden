const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    _id:Number,
    member_account:{
        type:String,
        trim:true,
        required:true
    },
    member_name:{
        type:String,
        trim:true,
        required:true
    },
    member_password:{
        type:String,
        trim:true,
        required:true
    },
    member_gender:{
        type:String,
        trim:true,
        required:true
    },
    member_phone:{
        type:[String],
        trim:true,
        required:true
    },
    member_birthdate:{
        type:String,
        trim:true,
        required:true
    },
    member_address:{
        type:String,
        trim:true,
        required:true
    },
    order_address:{
        type:[Object],
        trim:true,
        required:true
    },
    member_creditcard:{
        type:[Object],
        trim:true,
        required:true
    },
    collections:{
        type:[Object],
        trim:true,
        required:true
    },
    user_rental:{
        type:[Object],
        trim:true,
        required:true
    },
    user_purchase:{
        type:[Object],
        trim:true,
        required:true
    },
    lesson_booking:{
        type:[Object],
        trim:true,
        required:true
    },
    notifications_account:{
        type:[Object],
        trim:true,
        required:true
    },
    notifications_orders:{
        type:[Object],
        trim:true,
        required:true
    },
    notifications_lesson:{
        type:[Object],
        trim:true,
        required:true
    }, 
},{_id:false})
module.exports = mongoose.model('orderLists', memberSchema)