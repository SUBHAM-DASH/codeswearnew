import { connectToMongoDb } from "@/database/connectToDatabase";
import Users from "@/models/users/Users";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"

const loginuser = async (req, res) => {
    try {
        if (req.method === "POST") {
            await connectToMongoDb();
            const { email, password, loginBy, name } = req.body;
            const existEmail = await Users.findOne({ floating_email: email });
            if (loginBy === "normal") {
                if (!existEmail) {
                    return res.status(404).json({ status: "failed", message: "invalid credentials." });
                }
                const isMatch = await bcrypt.compare(password, existEmail.floating_password);
                if (!isMatch) {
                    return res.status(404).json({ status: "failed", message: "invalid password." });
                }
                if (existEmail && isMatch) {
                    await Users.updateOne({ _id: existEmail._id }, { $set: { loginBy: loginBy } });
                    const token = jwt.sign({ userId: existEmail._id }, process.env.JWT_SECRET, { expiresIn: '4d' });
                    res.status(200).json({ status: "success", message: "login successfully.", token });
                }
            } else if (loginBy === "sociallogin") {
                if (existEmail) {
                    const token = jwt.sign({ userId: existEmail._id }, process.env.JWT_SECRET, { expiresIn: '4d' });
                    res.status(200).json({ status: "success", message: "login successfully.", token });
                } else {
                    const newUsers = new Users({
                        floating_email: email,
                        floating_first_name: name,
                        loginBy: loginBy,
                        floating_last_name: name,
                    });
                    let saveUser = await newUsers.save();
                    const token = jwt.sign({ userId: saveUser._id }, process.env.JWT_SECRET, { expiresIn: '4d' });
                    res.status(200).json({ status: "success", message: "login successfully.", token });
                }
            } else {
                return res.status(400).json({ status: "failed", message: "invalid credentials." });
            }
        }
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: error.message });
    }
}

export default loginuser;
