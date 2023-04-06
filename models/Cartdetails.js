import mongoose from "mongoose";

const CartDetailSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    size: {
        type: Array,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, { timestamps: true });

mongoose.model = {};
const CartDetailsModel = mongoose.model('Cartdetails', CartDetailSchema);
export default CartDetailsModel;

