import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from 'cors';
import urlRoutes from './routes/url.js'
dotenv.config({debug: true});
const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
}));
app.use("/", urlRoutes);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Success");
    app.listen(process.env.PORT, ()=>{
        console.log(`server running on port ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
});
