import ExpensesModels from "../models/expensesModels.js";
import mongoose from "mongoose";

//get all expenses
const getAllExpenses = async (req, res) => {

    const user_id = req.user._id

    try {
        const expenses = await ExpensesModels.find({ user_id }).sort({ createdAt: -1 })
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


//create an expense
const createExpense = async (req, res) => {

    const { country, price, expenditureItem, remarks } = req.body

    //add data into db
    try {
        const user_id = req.user._id
        const expense = await ExpensesModels.create({ country, price, expenditureItem, remarks, user_id })
        res.status(200).json({ expense, message: "Expense created successfully" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete an expense

const deleteExpense = async (req, res) => {

    const { id } = req.params
    // console.log(id)
    // console.log(req.params)

    const expense = await ExpensesModels.findOneAndDelete({ _id: id })

    if (!expense) {
        return res.status(400).json({ error: "No such workout" })
    }

    res.status(200).json({ expense, message: "deleted successfully" })
    console.log(`Expense with ID ${expense._id} deleted successfully`)

}

//update an expense

const updateExpense = async (req, res) => {

    try {

        const { id } = req.params

        const expense = await ExpensesModels.findByIdAndUpdate({ _id: id }, req.body, {new: true, runValidators:true})

        if (!expense) {
            return res.status(400).json({ error: "No such workout" })
        }

        res.status(200).json({expense, message: 'Ok'})

    } catch (error) {

        res.status(500).json({message:error.message})
    }

}


export { getAllExpenses, createExpense, deleteExpense, updateExpense }