

const user = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require ("jsonwebtoken")


let register = async (req , res) => {
//destru
 let {name,email,password} = req.body


 //using post method
    console.log(email ,name, password)
    const salt =  await bcrypt.gensalt(10);
    const hash = await bcrypt.hash(password, salt);
    let user = new user(name,email,password)
    await user.save()

    let payload={id:user.id}
    jwt.sign(
        payload,
        env.process.jwt_secret,
        {
            expiresIn:"20m"
        },(err,token) =>{
            if(err){
                throw err
            }
            else{
                res.send(token)
            }
        }
    ).catch (()=>{
        console.log("error signig jwt");
        
    })   
    res.send (user)
}



let login = async (req , res) => {

    let {inp_email,inp_password} = req.body
    let user = await user.findone({email:inp_email})
    let isvalidPWD = await bcrypt.compare(inp_password , user.password) 
    
    if (!isvalidPWD){
        res.status(400).send("user not found")

    }
    else{
        let payload={id:user.id}
        jwt.sign(
            payload,
            env.process.jwt_secret,
            {
                expiresIn:"20m"
            },(err,token) =>{
                if(err){
                    throw err
                }
                else{
                    res.send(token)
                }
            }
        ).catch (()=>{
            console.log("error signig jwt");
            
        })   
    }
    
    let profile =  async(req , res) => {
        res.status(200).send("this is a profile")
    
    }
let trasaction=  async(req , res) => {
   
        res.status(200).send("this is a trasaction")
   }
let wishlist =  async(req , res) => {
        res.status(200).send("this is a wishlist")
   
}
module.exports = {
    login,register,profile,trasaction,wishlist
}}