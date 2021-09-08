const mongoose = require('mongoose')
const Schema = mongoose.Schema

const examsChema = new Schema({ 
    title:{
        type:String,
        default:'klien malumot kiritishni hohlamadi',
        required:true,
    },
    price:{
        type:Number,
        default:0
    },
    author:{
        type:String,

    },

    meta:{
        reading:{
            type:Number,
            default:0
        },
        buying:{
            type:Number,
            default:0
        },
    },
    dateTime:{
        type:Date,
        default:Date.now
    },
    photo:{
        type:String,

    }


 
})

module.exports = mongoose.model('product' , examsChema)



