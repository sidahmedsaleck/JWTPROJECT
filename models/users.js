const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:[true,"You Must Enter An Email."],
        trim:true,
    },
    password:{
        type:String,
        required:[true,"You Must Enter A Password."],
        trim:true,
        minlength:[8,"min Length of Password is 8."]
    },
    name:{
        type:String,
        required:[true,"You Must Enter A Name."],
        trim:true,
    }
})


const User = mongoose.model("User",userSchema)

module.exports = User