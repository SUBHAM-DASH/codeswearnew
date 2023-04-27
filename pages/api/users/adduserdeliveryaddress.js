import { connectToMongoDb } from "@/database/connectToDatabase";
import tokenMiddleware from "@/middleware/authMiddleware";
import DeliveryAddress from "@/models/users/AddDeliveryAddress";
import Products from "@/models/Products";
import CartDetailsModel from "@/models/Cartdetails";


const handler = async (req, res) => {
    try {
        await connectToMongoDb();
        console.log(req.body);
        // if (req.method === "POST") {
        //     const { fullname, mobilenumber, pincode, post, city, district, nearbylocation, productData } = req.body;

        //     //generate order id
        //     function generateRandomString() {
        //         let result = '';
        //         const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        //         for (let i = 0; i < 10; i++) {
        //             result += characters.charAt(Math.floor(Math.random() * characters.length));
        //         }
        //         return result;
        //     }
        //     const deliveryAddress = new DeliveryAddress({
        //         userId: req.userId,
        //         totalQty: productData.length,
        //         orderId: generateRandomString(),
        //         fullName: fullname,
        //         mobileNumber: mobilenumber,
        //         pinCode: pincode,
        //         post: post,
        //         city: city,
        //         district: district,
        //         nearbylocation: nearbylocation,
        //         products: productData
        //     });
        //     await deliveryAddress.save();


        //     //Remove from cart after product buy
        //     for (const item of productData) {
        //         await CartDetailsModel.deleteOne({ userId: req.userId, productId: item.productId });
        //     }

        //     res.status(201).json({ status: "success", message: "Order Placed Successfully." });
        // }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default tokenMiddleware(handler);
