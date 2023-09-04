import mongoose from "mongoose";


export const connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true});
    console.log(`Database connected successfully ${mongoose.connection.host}`)
  } catch (error) {
    console.log(`Error connecting with DB`, error.message);
  }
}