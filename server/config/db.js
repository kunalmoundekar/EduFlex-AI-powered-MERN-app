// server/config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${"👍"}`);
  } catch (err) {
    console.error("MongoDB Error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
