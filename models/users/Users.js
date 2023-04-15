import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    floating_email: {
        type: String,
        required: true
    },
    floating_password: {
        type: String,
        default: ""
    },
    loginBy: {
        type: String,
        required: true
    },
    floating_first_name: {
        type: String,
        required: true
    },
    floating_phone: {
        type: String,
        default:""
    },
    full_address: {
        type: String,
        default:""
    },
    floating_last_name: {
        type: String,
        required: true
    }
}, { timestamps: true });
mongoose.models = {};

const Users = mongoose.model("Users", UsersSchema);

export default Users;
