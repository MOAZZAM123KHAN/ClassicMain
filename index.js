const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB =  require('./config/db')
const router = require('./routes/userSignUP')

const app =express()
app.use(cors())
app.use('/api',router  )

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log('connected to DB')
        console.log("server is running")
    })

})
