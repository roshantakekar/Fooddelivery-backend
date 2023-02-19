import mongoose from "mongoose";
const schema=mongoose.Schema;
const foodTypeSchema=new schema({
    foodType:{type:String,require:true},
    price:{type:String,require:true}
})

const foodTypeModel=mongoose.model("foodTypeModel",foodTypeSchema);
export default foodTypeModel;