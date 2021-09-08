const {Router } = require('express')
const Schema = require('../model/Schema')
const router = Router()

router.get('/' , (req , res)=>{
    Schema.find({} , (err , data)=>{
        if(err)console.log(err)
        else{
            res.render('index' , {
                title: 'Bosh sahifa',
                datas : data,
            })
        }
    })
})


router.get('/product/:id' , (req , res)=>{
    Schema.findById(req.params.id , (err , data)=>{
        if(err) console.log(err)
        else{
            res.render('add' , {
                title: 'Malumot ozgartirish',
                datas : data,
                page:"O'zgartirish",
                button:'update'
                
            })
        }
    })
})

router.post('/product/:id' , (req , res)=>{
    const updateDB = {}
    console.log(req.body)

    updateDB.title= req.body.title,
    updateDB.author= req.body.author,
    updateDB.price= req.body.price,
    updateDB.meta = {reading: req.body.reading},
    updateDB.meta= {buying: req.body.buying},
    updateDB.photo='/img/'+req.body.photo
    const resUpdateId = {_id:req.params.id}

    Schema.update( resUpdateId , updateDB  , (err , data)=>{
        if(err) console.log(err)
        else{
            res.redirect('/')
        }
    })
    
})
router.get('/delete/:id' , (req , res)=>{
    Schema.findByIdAndRemove( req.params.id , (err, data)=>{
        if(err) console.log(err)
        else{
            res.redirect('/')
        }
    })
})

router.post('/' , (req , res)=>{
    res.send('Method of post')
})


module.exports = router









