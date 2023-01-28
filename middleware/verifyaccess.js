const jwt = require('jsonwebtoken')

require("dotenv").config()

const verifyAccess= (req,res, next) => {
    
    const auth = req.headers.authorization
    try 
    {
        if (auth && auth.startsWith('Bearer ') )
        {
            const token = auth.split(' ')[1]
            const access = jwt.verify(token,process.env.JWT_KEY);
            
            if (access)
            {
                res.userName= access.name
                next()
            }
            else
            {
                return res.status(401).json({err:'Access Denied (wrong token).'})
            }
        }
        else
        {
            return res.status(401).json({err:'Access Denied (no token).'})
        }
    }
    catch (err)
    {
        return res.status(401).json({err:err.message})
    }

} 


module.exports = verifyAccess