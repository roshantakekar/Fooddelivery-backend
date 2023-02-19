import mongoose from "mongoose";
const schema=mongoose.Schema;
const userCartSchema=new schema({
    foodName:{type:String,require:true},
    userRef:{type:String,require:true},
    foodId:{type:String,require:true},
    price:{type:String,require:true}
})

const   userCartModel=mongoose.model("userCartModel",userCartSchema);
export default userCartModel;