const express = require('express')
const app = express()
const port = 4000
const mongoose = require ('mongoose')
const userRoute = require('./route/userRoute')
const cors = require ('cors')
 
mongoose.connect('mongodb+srv://krishnadas10officialproject:EZtZB2Fh4vQmOPYo@cluster0.ielj8h8.mongodb.net/proplus-database').then(() => console.log('DB Connected'))

app.use(cors())
app.use(express.json())
app.use('/user',userRoute)
app.listen(port,(req,res)=>{
    console.log(`server runninng on ${port}`)
})

