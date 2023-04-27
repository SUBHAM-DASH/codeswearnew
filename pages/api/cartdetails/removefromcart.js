import tokenMiddleware from "@/middleware/authMiddleware"
import CartDetailsModel from "@/models/Cartdetails";


const handler = async (req, res) => {
    try {
        if (req.method === "GET") {
            const { id } = req.query;
            await CartDetailsModel.findByIdAndDelete(id);
            const carts = await CartDetailsModel.find({ userId: req.userId });
            res.status(200).json({ status: "success", message: "product removed.", carts });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
export default tokenMiddleware(handler);
