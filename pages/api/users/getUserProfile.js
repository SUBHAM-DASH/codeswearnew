import tokenMiddleware from "@/middleware/authMiddleware";
import Users from "@/models/users/Users";

const handler = async (req, res) => {
    try {
        if (req.method === "GET") {
            const userInfo = await Users.findOne({ _id: req.userId });
            res.status(200).json({ status: "success", userInfo });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
export default tokenMiddleware(handler);
