import express from "express"
import router from "./routes/routes.js";
import cors from "cors";
import dotenv from "dotenv"
import { connectDB } from "./database/db.js";

const app = express();
dotenv.config();

connectDB();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running at port no. ${PORT}`)
})