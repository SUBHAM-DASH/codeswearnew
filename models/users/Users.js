import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    floating_email: {
        type: String,
        required: true
    },
    floating_password: {
        type: String,
        required: true
    },
    floating_first_name: {
        type: String,
        required: true
    },
    floating_phone: {
        type: String,
        required: true
    },
    full_address: {
        type: String,
        required: true
    },
    floating_last_name: {
        type: String,
        required: true
    }
}, { timestamps: true });
mongoose.models = {};

const Users = mongoose.model("Users", UsersSchema);

export default Users;
