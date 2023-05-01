import userModel from "../models/userModel.js"
import brcypt from 'bcryptjs'

export const registerController = async(req, res, next) => {

    try{
        const {name, email, password} = req.body

        // Validate
        if(!name){
            next('please provide the name')
        }
        if(!email){
            next('please provide the email')
        }
        if(!password){
            next('please provide the password')
        }
        
        // Check the stored data
        const existingUser = await userModel.findOne({email})

        console.log(existingUser)
        if(existingUser){
            return res.status(200).send({
                success : true,
                message : 'Email is already there'
            })
        }

        // Store the data
        const newUser = {
            name : name,
            email : email,
            password : brcypt.hashSync(password) 
        }
        
        const user = userModel.create(newUser)
        console.log("new user..", newUser)
        res.status(200).send({
            success : true,
            message : 'User is registered successfully',
            user
        })
    }catch(err){
        next('Error in register controller')
    }
}

export const loginController = async(req, res, next) => {
    try{
        const {email, password} = req.body

        if(!email || !password){
            next('Provide all fields')
        }

        const user = await userModel.findOne({email})
        console.log(user)
        
        if(!user){
           next('Invaild email and password')
        }

        const isPassword = bcrypt.compareSync(password, user.password)
        if(!isPassword){
            res.status(400).json({
                success : false,
                message : 'Password incorrect',
            })
        }
        res.status(200).json({
            success : true,
            message : 'Login successfully',
            user
        })

    }catch(err){

    }
}

