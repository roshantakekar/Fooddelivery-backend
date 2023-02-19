import express from "express";
import userModel from "../model/UserModel.js";
import bcrypt from "bcrypt";
import authenticate from "../middleware/authenticate.js";
import mongoose from "mongoose";

const signUpRouter = express.Router();
signUpRouter.post("/", async (req, res) => {
    //res.send("signup");
    console.log("sdasd");
    const {email,password}=req.body;
    try{
        const data1=await userModel.find({email})
        if(data1.length!==0){
            return res.send({exist:true,data:null}) 
        }else{
            const pass= await bcrypt.hash(password,10);
            req.body.password=pass;
            req.body.userCartRef=mongoose.Types.ObjectId();
            const data2= await userModel.create(req.body);
            return res.send({exist:false,data:data2})
        }
    } catch (e) {
        console.log('error', e);
    }

})

signUpRouter.get("/",authenticate,(req,res)=>{
    return res.send(req.data);
})

export default signUpRouter;