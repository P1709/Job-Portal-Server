import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    company : {
        type : String,
        required : [true, 'Company name is required'],
    },
    position : {
        type : String,
        required : [true, 'Job position is required'],
        maxlength : 100,
    },
    status : {
        type : String,
        enum : ['Pending', 'Reject', 'Interview'],
        default : 'Pending',
    },
    workType : {
        type : String,
        enum : ['Full-time', 'Part-time', 'Internship', 'Contract', 'Remote'],
        default : 'Remote',
    },
    workLocation : {
        type : String,
        default : 'Pune',
        required : [true, 'Work location is required'],
    },
    createdBy : {
        type : mongoose.Types.ObjectId,
        ref : 'User',
    },
    jobType : {
        type : String,
        default : 'Development',
        required : [true, 'Work location is required'],
    }
    
},
{timestamps : true}
);

export default mongoose.model('Job', jobSchema)