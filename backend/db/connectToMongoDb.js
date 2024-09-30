import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to Mongo DB');
    } catch (error) {
        console.log('Error Connecting to MongoDB:', error);
    }
}
export default connectToMongoDB;