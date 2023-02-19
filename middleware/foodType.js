import foodTypeModel from "../model/foodTypeModel.js";
const foodType =async (req, res, next) => {
    console.log('foodTypeh');
    
    try {
       const result = await foodTypeModel.find({});
       req.data={"foodTypeData":result};
       next()
    }

    catch (e) {
        return res.send({status:false,error:e.message})
       
    }
};
export default foodType;