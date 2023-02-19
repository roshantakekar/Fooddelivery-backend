import express from "express";
import userModel from "../model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authenticate from "../middleware/authenticate.js";


const loginRouter = express.Router();
loginRouter.post("/", async (req, res) => {
    console.log('haha');
    //res.send("signup");
    const {email,password}=req.body;
    console.log(`${email} ${password}`)


    try{
        const data1=await userModel.find({email})
        console.log(data1)
        if(data1.length==0){
            console.log('haha2');
            return res.send({status:false});
            
        }else{
            console.log('haha3');
            const hashed=data1[0].password;
            const userLoggedData={id:data1[0]._id,firstName:data1[0].firstName,lastName:data1[0].lastName,email:data1[0].email}
            console.log("dats");
            console.log("dataaa",data1);
            const passwordBool= await bcrypt.compare(password,hashed);
            console.log(passwordBool);
            if(!passwordBool){
                return res.send({status:false})
                
            }else{
                const token= await jwt.sign({userLoggedData:userLoggedData},"shakespeare",{expiresIn:"100000000000000000000000000000s"});
                return res.send({status:true,token:token,userLoggedData:userLoggedData})
            }
        }
    } catch (e) {
        console.log(e);
    } 

})

loginRouter.get("/",authenticate,(req,res)=>{
    return res.send(req.data);
})

export default loginRouter;