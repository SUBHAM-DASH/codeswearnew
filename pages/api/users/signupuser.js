import { connectToMongoDb } from "@/database/connectToDatabase";
import Users from "@/models/users/Users";
import bcrypt from "bcryptjs";


const signupUser = async (req, res) => {
    try {
        if (req.method === "POST") {
            await connectToMongoDb();
            const { floating_email, floating_password, repeat_password, floating_first_name, floating_phone, full_address, floating_last_name } = req.body;
            if (floating_password !== repeat_password) {
                return res.status(200).json({ status: "failed", message: "invalid credentials." });
            }

            const existEmail = await Users.findOne({ floating_email });
            if (existEmail) {
                return res.status(200).json({ status: "failed", message: "sorry this email is already exists" });
            }

            const hashedPassword = bcrypt.hashSync(floating_password, 10);
            const newUsers = new Users({
                floating_email: floating_email,
                floating_password: hashedPassword,
                floating_first_name: floating_first_name,
                floating_last_name: floating_last_name,
                floating_phone: floating_phone,
                full_address: full_address
            });
            await newUsers.save();

            res.status(200).json({ status: "success", message: "signup successfully." });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
export default signupUser;
