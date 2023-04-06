// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToMongoDb } from "@/database/connectToDatabase"
export default async function handler(req, res) {
  await connectToMongoDb();
  res.status(200).json({ name: 'John Doe' })
}
