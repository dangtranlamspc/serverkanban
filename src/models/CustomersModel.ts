import mongoose, { Schema } from "mongoose";

const scheme = new Schema({
    firstName : String,
    lastName : String,
    email : {
        require : true,
        type : String,
    },
    password : {
        require : true,
        type : String,
    },
    isDeleted : {
        type : Boolean,
        default : false,
    },
    isVerify : {
        type : Boolean,
        default : false
    },
    verifyCode : String,
    createdAt : {
        type : Date,
        default : Date.now(),
    },
    updatedAt : {
        type : Date,
        default : Date.now(),
    },
})

const CustomerModel = mongoose.model('customers', scheme)
export default CustomerModel