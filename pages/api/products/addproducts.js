import { connectToMongoDb } from "@/database/connectToDatabase";
import Products from "@/models/Products";

const postHandler = async (req, res) => {
    try {
        if (req.method === "POST") {
            await connectToMongoDb();
            const { category, price, color, size, image, title } = req.body;
            const saveProducts = new Products({
                category,
                price,
                color,
                size,
                image,
                title
            });
            await saveProducts.save();
            res.status(200).json({ status: "success", message: "product saves successfully." });
        }
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: error.message });
    }
}
export default postHandler;

