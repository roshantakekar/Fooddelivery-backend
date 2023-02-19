import express from "express";
import axios from 'axios';
import usersCartModel from "../model/usersCartModel.js";



const userCartRouter = express.Router();

userCartRouter.post('/', async (req, res) => {
    try {
        console.log("user cart route post");
        console.log("reqbody",req.body);
        const result = await usersCartModel.create(req.body);
        //result.data["status"]=true;
        console.log("resultingggg",result);
        result["status"]=req.data.status;
        console.log("sharpresult",result);
        return res.send(result);
    }catch(e){
        console.log(e);
    }
    
})

userCartRouter.get('/', async (req, res) => {
    console.log("carttttrouteeerrrr");
    const result = await usersCartModel.find({});
    
    return res.send(result);
})

userCartRouter.get('/:userId', async (req, res) => {
    console.log("carttttrouteeerrrr");
    const result = await usersCartModel.find({ userCartRef: req.params.userId });
    console.log("resulttttt", result);
    return res.send(result);
})

userCartRouter.delete('/:userId', async (req, res) => {
    console.log("delllllllllllllllllllll");
    const result = await usersCartModel.deleteMany({ userCartRef: req.params.userId });
    console.log("resulttttt", result);
    return res.send(result);
})


userCartRouter.delete('/deleteItem/:userId', async (req, res) => {
    console.log("delllllllllllllllllllll");
    const result = await usersCartModel.findByIdAndDelete(req.params.userId);
    console.log("after delete", result);
    return res.send(result);
})

export default userCartRouter