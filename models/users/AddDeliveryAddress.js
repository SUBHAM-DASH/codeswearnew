import mongoose from "mongoose";

const DeliveryAddressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    totalQty: {
        type: Number,
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    pinCode: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    nearbylocation: {
        type: String,
        default: ""
    },
    products: {
        type: Array,
        default: []
    }
}, { timestamps: true });

mongoose.models = {};

const DeliveryAddress = mongoose.model("deliveryaddres", DeliveryAddressSchema);

export default DeliveryAddress;
