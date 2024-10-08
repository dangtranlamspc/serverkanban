import mongoose, { Schema } from "mongoose";

const UserScheme = new Schema({
    name : {
        type : String,
        require:true,

    },
    email : {
        type : String,
        require : true
    },
    password : {
        type  : String,
        require :true
    },
    photoUrl: String,
    rule: {
		type: Number,
		default: 1,
	},
    createdAt : {
        type : Date,
        default : Date.now()
    },
    updatedAt : {
        type : Date,
        default : Date.now()
    },

});


const UserModel = mongoose.model('users', UserScheme)
export default UserModel