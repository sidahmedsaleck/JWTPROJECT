const mongoose = require('mongoose')

const connectDB = async (CNX_STR) => {
    mongoose.set('strictQuery', true)
    return mongoose.connect(CNX_STR,
        {
        useNewUrlParser:true,  
        useUnifiedTopology:true,
        })
}

module.exports = connectDB

