require("dotenv").config()
const mongoose = require('mongoose')
const User  = require ('../Model/userSheama')
const Course = require ('../Model/courseSchema')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')



module.exports = {
    // user registration

    Registration : async (req,res) => {

        const hashedPassword = await bcrypt.hash(req.body.password, 10); 
        const {name , email , username} = req.body
        User.create ({
            name : name ,
            email : email ,
            username : username ,
            password : hashedPassword
            
        })
          
        res.status(201).json({message : "User succssfully registred"})
    } ,

    Login : async (req,res) => {
        const {username,password } = await req.body ;
        const user = await User.findOne({
                username : username ,
            }) ; 
           if(!user){
                return res.status(404).json({ message : "The requested employer was not found"})
             }

            const passwordMatch = await bcrypt.compare(password, user.password);
            
            if (!passwordMatch){
                return res.status(401).json({error:"invalid Password"})
            }

         const token = jwt.sign (
                {username : user.username},
                process.env.ACCES_TOKEN_SECRET ,
            );

        res.status(201).json({message : "login successful",data : token})

        },

        AddCourse : async (req,res) => {
            const {title , description , duration , category} = req.body
            Course.create({
                title : title ,
                description : description,
                duration : duration ,
                category : category,
            })

            res.status(201).json({message : "couse added successfully"})

        }

}





