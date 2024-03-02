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

            res.status(201).json({message : "course added successfully"})

        },
        Getcources : async (req,res) => {
        
            const allCourses = await Course.find()
                res.status(200).json({
                    status : "success",
                    message : "succesfully fetched course",
                    data : allCourses
                })
                
            },

        UpdateCousesById : async (req,res) => {

                const CourseId = req.params.id ;
                const {title,description,duration} = req.body ;
                const employee = await Course.findByIdAndUpdate(EmployeeId,{
                    $set:{title ,description,duration} 
                })
                if(!Course){
                    return res.status(404).json({message:'course not found'})
                }
        
                res.status(200).json({message : 'succesfully updated course'})
              },
              
    deleteCourseById : async (req,res) => {

        const CourseId = req.params.id
        const course = await Course.findByIdAndDelete(employeeId)

        if(!CourseId){
        return res.status(404).json({error : "course not found"})
          }

        res.status(204).json({message : "course delete succesfully"})

      }

}







