import mongoose from "mongoose";

//schema to define structure of a particular document in a database

const Schema = mongoose.Schema

const expensesSchema = new Schema({
    country: {
        type: String,
        required: true
    },

    expenditureItem: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    remarks: {
        type:String,
    },

    user_id:{
        type:String,
        required: true
    }

}, {timestamps: true})



const ExpensesModels = mongoose.model("ExpensesModels", expensesSchema)



export default ExpensesModels;