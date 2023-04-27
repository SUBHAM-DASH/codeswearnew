import tokenMiddleware from "@/middleware/authMiddleware";
import CartDetailsModel from "@/models/Cartdetails";

const handler = async (req, res) => {
    try {
        if (req.method === "POST") {
            const { _id, price, color, size, image, title } = req.body;
            const isExistInCart = await CartDetailsModel.findOne({ productId: _id, userId: req.userId, size: size, color: color });
            if (isExistInCart) {
                return res.status(200).json({ status: "failed", message: "product is already in cart." });
            }
            const newCartProduct = new CartDetailsModel({
                title: title,
                size: size,
                quantity: 1,
                price: price,
                color:color,
                image: image,
                userId: req.userId,
                productId: _id
            });
            await newCartProduct.save();
            return res.status(200).json({ status: "success", message: "product added in cart." });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default tokenMiddleware(handler);
