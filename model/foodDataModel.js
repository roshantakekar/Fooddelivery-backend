import mongoose from "mongoose";
const schema=mongoose.Schema;
const foodDataSchema=new schema({
    name:{type:String,require:true},
    price:{type:String,require:true},
    img:{type:String,require:true},
    description:{type:String,require:true},
})

const foodDataModel=mongoose.model("fooddata",foodDataSchema);
export default foodDataModel;