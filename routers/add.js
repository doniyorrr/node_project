const {Router } = require('express')
const Schema = require('../model/Schema')
const router = Router()

router.get('/add' , (req , res)=>{
    res.render('add' , {
        title: "Mahsulot Qoshish",
        page: "Mahsulot qoshish",
        button:"add"

    })
})

router.post('/add' , (req , res)=>{
    // console.log(req.body)
    const db = new Schema({
        title:req.body.title,
        author:req.body.author,
        price:req.body.price,
        "meta.reading":req.body.reading,
        "meta.buying":req.body.buying,
        photo:"/img/"+req.body.photo,
    })
    db.save((err , data)=>{
        if(err) console.log(err)
        else{
            // console.log(data)
            res.redirect('/')
        }
    })
})


module.exports = router

