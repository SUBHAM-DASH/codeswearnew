import mongoose from "mongoose";
export const connectToMongoDb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.n1fltlh.mongodb.net/?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected With Mongoose Successfully.");
    } catch (error) {
        console.log("Error Occoured While Connecting:", error.message);
    }
}

