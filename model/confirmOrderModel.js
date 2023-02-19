import mongoose from "mongoose";
const schema=mongoose.Schema;
const confirmOrderSchema=new schema({
    userRef:{type:mongoose.Schema.ObjectId,ref:"usersCartModel"},
    totalCartItems:{type:String,require:true},
    totalPrice:{type:String,require:true},
    itemsOrdered:[{foodName:{type:String,require:true},price:{type:String,require:true},priceItem:{type:String,require:true},totalItems:{type:String,require:true}}]
})

const confirmOrderModel=mongoose.model("confirmOrderModel",confirmOrderSchema);
export default confirmOrderModel;