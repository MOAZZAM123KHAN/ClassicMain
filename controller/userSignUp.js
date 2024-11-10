const userModel = require("../models/userModel")

async function userSignupController(req,res) {
    try{
        const [email, Password ,name] = req.body
        if(!email){
            throw new Error('Please provide  the email')
        }
        
        if(!Password){
            throw new Error('Please provide  the password')
        }
        if(!name){
            throw new Error('Please provide  the name')
        }
        }catch(err){
        res.json({
            message : err,
            error:true,
            sucess:false

            

        })
    }
    
}