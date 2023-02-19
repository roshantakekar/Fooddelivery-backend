import express from "express";
import axios from 'axios';
import foodDataModel from "../model/foodDataModel.js";



const foodRouter = express.Router();
foodRouter.get('/', async (req, res) => {
    console.log("dddd");
    const result=await foodDataModel.find({});
    //console.log("result",result);
    //result.data.status=true;
    return res.send(result);



})

export default foodRouter