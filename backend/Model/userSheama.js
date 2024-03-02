const mongoose =require ('mongoose')

const UserScheama = new mongoose.Schema({
    name : String,
    email : String ,
    username : String ,
    password : String ,

})

module.exports = mongoose.model ('users' , UserScheama)
