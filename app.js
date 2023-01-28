require('dotenv').config()
const connectDB = require('./db/connect')
const express = require("express")
const app = express()
const auth = require("./routes/auth")
const resources = require("./routes/resources")


app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use('/api/auth',auth)
app.use('/resources',resources)

app.get('/',(req,res)=>{
    res.status(200).json({msg:`Welcome to JwtProject API.
    1- use POST /api/auth/login with {email,password} to login and get an access token thats is valide for 1min.
    2- use POST /api/auth/signup with {name,email,password} to signup.
    3- use GET /resources with Bearer token in the headers to get your resources.`})
})

app.use((req,res)=>{
    res.status(404).json({err:'Sorry This Route does Not Exist.'})
})







const start = async (CNX_STR) => {  
    try {
        await connectDB(CNX_STR)
        app.listen(process.env.PORT,()=>{
            console.log("App Listning on ",process.env.PORT,"...")
        })
    }
    catch  (err)
    {
        console.log(err)
    }
}

start(process.env.CNX_STR)