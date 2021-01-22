// const { query } = require('express')
const express = require('express')
// const router = require('express').Router()
const router = express.Router()
const product = require('../models/products')
const members = require('../models/members')

//query all product 
router.get('/', async (req,res) =>{
    const products = await product.find()
    res.json(products)
})

//Create new product
router.post('/add', async(req,res) => {
    const newproduct = new product(req.body);
    const savedproduct = await newproduct.save();
    res.json(savedproduct)
})


//search specific item
router.get('/get/:id/:member_id?', async(req,res) => {
    // console.log("id",req.params.id );
    let prod = await product.findById({_id: req.params.id})
    const member_id = req.params.member_id
    if(member_id) {
        const member = await members.findById({_id: member_id})
        const product_id = req.params.id
        let collections = member.collections
        let member_collection = collections.find(obj => obj.product_id == product_id)
        let new_prod = JSON.parse(JSON.stringify(prod)) // copy
        new_prod.member_collection = (member_collection ? true : false)
        prod = new_prod
    }
    res.json(prod);
})

//search specific occasion
//路由"/get"這裏要設定不一樣，不然會先找到上面符合的，occasion就變成id
router.get('/geto/:occasion', async(req,res) => {
    // const prod_occasion = await product.find({occasion_category: req.params.occasion})
    const prod_occasion =await product.find({ occasion_category: { $in: [req.params.occasion]} })
    console.log(prod_occasion)
    res.json(prod_occasion);
})
//這是一個找字串的方法，在memebr欄位中的陣列資料找kevin
//db.getCollection('library').find({member:{$in:[“Kevin”]}})
// db.getCollection('chatroom').find({messages:{$elemMatch:{content:”Hello”}}}) 

router.get('/getc/:category', async(req,res) => { 
    const prod_category =await product.find({ product_category: req.params.category  })
    console.log(prod_category);
    res.json(prod_category);
})

//cardsm限制4筆
router.get('/getr/:category', async(req,res) => { 
    const prod_category =await product.find({ product_category: req.params.category  }).limit(4)
    console.log(prod_category);
    res.json(prod_category);
})

//nineGrid限制9筆
router.get('/getn/:category', async(req,res) => { 
    const prod_category =await product.find({ product_category: req.params.category  }).limit(9)
    console.log(prod_category);
    res.json(prod_category);
})

//搜尋
router.get('/search/:keyword', async(req,res) => {
    // console.log("搜尋全部商品: "+ req.params.keyword);
    const keyword =await product.find({ product_name : {$regex: req.params.keyword} })
    res.json(keyword);
})

router.get('/rentproductall/:occasion', async(req,res) => {
    console.log("進入某類別商品: "+ req.params.occasion);
    const keyword =await product.find({ occasion_category: { $in: [req.params.occasion] }})
    res.json(keyword);
})

//依inventory排序：低到高
router.get('/rentproductall/:price', async(req,res) => {
    console.log("依照價格排序: "+ req.params.price);
    const price =await product.find.sort({ product_inventory:1 })
    res.json(price);
})
//依inventory排序：高到低
router.get('/rentproductall/:price', async(req,res) => {
    console.log("依照價格排序: "+ req.params.price);
    const price =await product.find.sort({ product_inventory:-1 })
    res.json(price);
})


//delete specific item
router.delete('/detele/:id', async(req,res) =>{
    const result = await product.findByIdAndDelete({_id:req.params.id})
    res.json(result)
})

// update a specific item
router.patch('/update/:id', async(req,res) =>{
    const member = await members.findById({_id: 1});
    const product_id = req.params.id;
    let collections = member.collections;
    let exist = collections.findIndex(obj => obj.product_id == product_id);
    if(exist < 0) { // not found 
        member.collections.push({
            product_id: parseInt(product_id)
        })
    }
    else {
        member.collections.splice(exist, 1)
    }
    const newMember = new members(member);
    const saveMember = await newMember.save();
    res.send(saveMember)
})

module.exports = router;

