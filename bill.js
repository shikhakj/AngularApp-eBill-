const mongoose =require('mongoose')

const billSchema= new mongoose.Schema(
    {
        id:String,
        date:String,
        units:Number

    }
)
const bill=mongoose.model(bill,billSchema)

module.exports=model