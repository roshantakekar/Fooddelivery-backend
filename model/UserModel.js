import mongoose from "mongoose";
const schema=mongoose.Schema;
const userSchema=new schema({
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    userCartRef:{type:mongoose.Schema.ObjectId,ref:"usersCartModel"}
})

const userModel=mongoose.model("userModel",userSchema);
export default userModel;