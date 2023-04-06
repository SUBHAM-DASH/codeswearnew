import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: Array,
        required: true
    },
    size: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
},{timestamps:true});

mongoose.model = {};
const ProductModel = mongoose.model('Products', ProductSchema);
export default ProductModel;
