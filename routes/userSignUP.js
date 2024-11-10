const express = require('express')


const router = express.Router()

const userSignUpController=require("..controller/userSignUP")

router.post("/signup",router)
const PORT =4000 || process.env.PORT

module.exports=router