
const jwt =require("jsonwebtoken")
const user = request("../model/user")

const verfy_token= async(req, res, next) =>{

    let token = req.heder('Authorization')
    if (token){
        try{
        let payload=jwt.verify(token,process.env.jwt_secret)
        user = await user.findById(payload.id)
        req.user =user
        next() }
        catch{res.send('involid token')}  
    }
    else{
        res.send("no acess!!")
    }

}

module.exports = verfy_token