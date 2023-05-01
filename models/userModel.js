import mongoose from "mongoose";
import validator from "validator";

const useSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required']
    },
    lastName :{
        type : String,
    },
    email : {
        type : String,
        required : [true, 'Email is required'],
        unique : true,
        validate : validator.isEmail,
    },
    password : {
        type : String,
        required : [true, 'Password is required'],
        minlength : [6, 'Password length should be greater than 6 character'],
        select : true,
    },
    location : {
        type : String,
        default : "India"
    }
})

export default mongoose.model('Users', useSchema)