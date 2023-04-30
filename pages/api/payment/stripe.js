import tokenMiddleware from "@/middleware/authMiddleware";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const handler = async (req, res) => {
    try {
        if (req.method === "POST") {
            console.log(req.body);
            const { amount, source, description } = req.body;
            const charge = await stripe.charges.create({
                amount,
                currency: 'usd',
                source,
                description,
            });
            console.log(charge);
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: error.message });
    }
}
export default tokenMiddleware(handler);
