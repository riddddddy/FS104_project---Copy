import express from "express";
import { createExpense, getAllExpenses, deleteExpense, updateExpense } from "../controllers/expensesController.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router()


//require auth for all expenses routes
router.use(requireAuth)


//Get all expenses
router.get('/', getAllExpenses)

//create an expense
router.post('/', createExpense)

//delete an expense
router.delete('/:id', deleteExpense)

//update an expense
router.patch('/:id', updateExpense)

export default router