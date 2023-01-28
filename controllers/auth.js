const User = require('../models/users')
const jwt = require('jsonwebtoken')
require("dotenv").config()




const signUP = async (req,res) => {

    const {email , password, name} = req.body
    try {
        if (Validation(email,password))
        {
            const newUser = await User.create({email,password,name})
            return res.status(201).json({user:newUser})
        }
        else
            res.status(500).json({err:'Login Data invalide'})
    }
    catch (err)
    {
        res.status(500).json({err:err.message})
    }
}


const login = async (req,res) => {

    const {email , password } = req.body
    try {
        if (Validation(email,password))
        {
            const user = await User.findOne({email:email,password:password})
            if (user)
            {
                const { email , id, name } = user
                const token = jwt.sign({ id, email , name}, process.env.JWT_KEY, {expiresIn:60})
                return res.status(201).json({user:user,token:token})
            }
            else
            return res.status(203).json({err:'User Is Not In Database.'})
        }
        else
            res.status(500).json({err:'Login Data invalide.'})
    }
    catch (err)
    {
        res.status(500).json({err:err.message,source:"catch"})
    }
}




function Validation(email,password)
{
    if(email && password)
    {
        return true
    }
    else 
    return false
}



module.exports = {login , signUP }