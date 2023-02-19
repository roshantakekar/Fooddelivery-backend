import express from "express";
import usersCartModel from "../model/usersCartModel.js";



const cartPriceRouter = express.Router();

cartPriceRouter.get('/:userId', async (req, res) => {
    try {
        console.log("cartPrice Router");

        const foodTypeData = req.data.foodTypeData;
        const result = await usersCartModel.find({ userCartRef: req.params.userId });
        const foodNamesArry = result.map((x) => x.foodName);
        let tempObj = {};
        for (const num of foodNamesArry) {
            debugger;
            tempObj[num] = tempObj[num] ? tempObj[num] + 1 : 1;
        }
        console.log("consolidated", tempObj);
        console.log("foodTypeData", foodTypeData);

        let finalResult = [];
        //foodTypeData
            for(const [key, value] of Object.entries(tempObj)) {
                console.log(key, value);
                let tempStr=key.toLowerCase().split(' ').join('_');
                console.log("tata",JSON.parse(foodTypeData.find(o => o.foodType === tempStr).price))
                finalResult.push({foodName:key,totalItems:value,priceItem:JSON.parse(foodTypeData.find(o => o.foodType === tempStr).price),price:JSON.parse(foodTypeData.find(o => o.foodType === tempStr).price)*JSON.parse(value)})
            }
            const totalPrice=finalResult.reduce((acc,data)=>{
                acc=acc+data.price
                return acc;
            },0)

            const totalCartItems=finalResult.reduce((acc,data)=>{
                acc=acc+data.totalItems
                return acc;
            },0)
            
            

            console.log('tt',finalResult);
            //console.log("finale",finalResult);
            return res.send({finalResult,totalPrice,totalCartItems});



        //console.log("rererere", result);

        //return res.send(req.data.foodTypeData);
    } catch (e) {
    console.log(e);
}

})


export default cartPriceRouter