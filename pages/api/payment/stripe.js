import tokenMiddleware from "@/middleware/authMiddleware";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const handler = async (req, res) => {
    try {
        if (req.method === "POST") {
            const { price, id, title, _id } = req.body;
            stripe.charges.create({
                amount: price,
                currency: 'usd',
                source: id,
                description: `Payment for ${title}`,
                metadata: {
                    productId: _id
                }
            }, (err, charge) => {
                if (err) {
                    console.log("error", err)
                } else {
                    console.log("success", charge);
                }
            })
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: error.message });
    }
}
export default tokenMiddleware(handler);
