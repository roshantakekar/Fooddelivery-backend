import express from "express";
import confirmOrderModel from "../model/confirmOrderModel.js";



const confirmOrderRouter = express.Router();

confirmOrderRouter.post('/', async (req, res) => {
    try {
        
        var result = await confirmOrderModel.create(req.body);
        // //result.data["status"]=true;
        // console.log("resultingggg",result);
        // result["status"]=req.data.status;
        // console.log("sharpresult",result);
        return res.send(result);
    }catch(e){
        return res.send(e);
        //console.log(e);
    }
    
})

confirmOrderRouter.get('/', async (req, res) => {
    console.log("confirmOrder");
    const result = await confirmOrderModel.find({});
    return res.send(result);
})

confirmOrderRouter.get('/:userId', async (req, res) => {
    console.log("confirmOrder");
    const result = await confirmOrderModel.findById(req.params.userId);
    return res.send(result);
})



export default confirmOrderRouter