const express = require('express')
const dotenv = require('dotenv')
const userRouts = require("./routes/userRoots")
const connectdb = require('./config/database')
dotenv.config()
const app = express()
const PORT = process.env.PORT
connectdb()


app.use(express.json())


app.use(`/api/users`, userRouts)

app.listen(Port , ()=>{
    console.log(`running on http://localhost:${Port}`);
    
})