const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('user',userSchema)