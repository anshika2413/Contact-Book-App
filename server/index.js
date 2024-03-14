import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js"
const app = express();

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose.connect('mongodb://127.0.0.1:27017/class')
  .then(()=>{
    app.listen(PORT,()=>{
      console.log("http://localhost:"+PORT);
    }) 
  })

  app.use("/api" ,route);

  