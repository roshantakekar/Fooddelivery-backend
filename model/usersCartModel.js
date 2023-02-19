import mongoose from "mongoose";
const schema=mongoose.Schema;
const usersCartSchema=new schema({
    userCartRef:{type:String,require:true},
    foodName:{type:String,require:true},
    price:{type:String,require:true},
    status:{type:Boolean}
})

const usersCartModel=mongoose.model("usersCartModel",usersCartSchema);
export default usersCartModel;