import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import signUpRouter from "./controller/signUpRouter.js";
import loginRouter from "./controller/loginRouter.js";
import foodRouter from "./controller/foodRouter.js";
import userCartRouter from "./controller/userCartRouter.js";
import cartPriceRouter from "./controller/cartPriceRouter.js";
import confirmOrderRouter from "./controller/confirmOrderRouter.js";
import authenticate from "./middleware/authenticate.js";
import foodType from "./middleware/foodType.js";


dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());
//app.use(authenticate);
app.use("/authenticator",authenticate);
app.use("/signup",signUpRouter);
app.use("/login",loginRouter);
app.use("/foodData",foodRouter);
app.use("/confirmOrder",confirmOrderRouter);
app.use("/usercartdata",authenticate,userCartRouter);
app.use("/getUserCartPrice",foodType,cartPriceRouter);

//app.use()
mongoose.set('strictQuery', true);
mongoose.connect(process.env.mongoDB, {useNewUrlParser: true}, ()=>{
    console.log("DB Connected");
    app.listen(process.env.PORT,(req,res)=>{
        console.log("server started...");
    }),(err)=>{
        console.log("Error")
    }
})