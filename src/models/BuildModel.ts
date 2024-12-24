import mongoose, { Schema } from "mongoose";

const scheme = new Schema ({
    createdBy : {
        type : String,
        require : true,
    },
    total : {
        type : Number,
        require : true,
    },

})

const BuildModel = mongoose.model('build', scheme)
export default BuildModel;