import mongoose, { Schema } from "mongoose";

const scheme = new Schema({
    createBy : {
        type : String,
        required : true,
    },
    count : {
        type : Number,
    },
    subProductId : {
        type : String, 
        required : true,
    },
    image : String,
    size : String,
    color : String,
    price : Number,
    qty : Number,
    productId : String,
    title : String,
});

const CartModel = mongoose.model('cart', scheme);
export default CartModel;