
const express = require("express")

const verfy_token= require ('../middleware/verification')

const router = express.Router();

const{register,login,profile,wishlist,trasaction} = require("../controllers/userControllers");
const { request } = require("http");




router.get('/register/', register)
router.get('/login/', login)
router.get('/profile/',verfy_token,profile)

router.post('/trasaction/',verfy_token, trasaction)
router.post('/wishlist/', verfy_token, wishlist)
module.exports= router;