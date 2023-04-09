import { connectToMongoDb } from "@/database/connectToDatabase";
import Users from "@/models/users/Users";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"

const loginuser = async (req, res) => {
    try {
        if (req.method === "POST") {
            await connectToMongoDb();
            const { email, password } = req.body;
            const existEmail = await Users.findOne({ floating_email: email });
            if (!existEmail) {
                return res.status(404).json({ status: "failed", message: "invalid credentials." });
            }
            const isMatch = await bcrypt.compare(password, existEmail.floating_password);
            if (!isMatch) {
                return res.status(404).json({ status: "failed", message: "invalid password." });
            }
            if (existEmail && isMatch) {
                const token = jwt.sign({ userId: existEmail._id }, process.env.JWT_SECRET, { expiresIn: '4d' });

                res.status(200).json({ status: "success", message: "login successfully.", token });
            }
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default loginuser;
