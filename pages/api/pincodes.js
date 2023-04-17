import tokenMiddleware from "@/middleware/authMiddleware";

const handler = (req, res) => {
    try {
        if (req.method === "GET") {
            res.status(200).json({ status: "success", pincodes: ["756120", "561233", "756100", "756110"] });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
export default tokenMiddleware(handler);
