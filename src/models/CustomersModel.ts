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
    }
})

const CustomerModel = mongoose.model('customers', scheme)
export default CustomerModel