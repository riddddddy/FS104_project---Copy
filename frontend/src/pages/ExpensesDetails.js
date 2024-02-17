import { useState } from 'react'
import React from 'react'
import useAppHook from '../context/useAppHook'

const ExpensesDetails = ({ country, expenditureItem, price, remarks, expensesData, _id, shouldFetch, setShouldFetch, item, setCountry, setExpenditureItem, setPrice, setRemarks, setIsEditing, setExpenseID }) => {

    const { user } = useAppHook()

    // const [country1, setCountry1] = useState('')
    // const [expenditureItem1, setExpenditureItem1] = useState('')
    // const [price1, setPrice1] = useState('')
    // const [remarks1, setRemarks1] = useState('')

    // console.log(item)

    //delete expense
    const deleteHandler = async (e) => {

        if (!user) {
            console.log('you are not logged in')
            return
        }

        const response = await fetch('/api/expenses/' + _id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()
        console.log(json)
        console.log(expensesData)
        expensesData = expensesData.filter((item) => {
            return item._id !== e._id
        })

        setShouldFetch(true)


    }

    //update expense

    const editHandler = (item) => {
        getSingleTask(item)
        setIsEditing(true)

    }

    const getSingleTask = async (expense) => {
        setCountry(expense.country)
        setPrice(expense.price)
        setExpenditureItem(expense.expenditureItem)
        setRemarks(expense.remarks)

        setExpenseID(expense._id)

        console.log(expense)
    }


    return (

        <div className='expenses-details bg-light mb-4' >
            <h4>{country}</h4>
            <p><strong>Expenditure Item : </strong>{expenditureItem}</p>
            <p><strong>Price: </strong>${price}</p>
            <p><strong>Remarks:</strong> {remarks}</p>

            <span><button onClick={deleteHandler} className='btn btn-danger'>Delete</button></span>
            <button onClick={() => editHandler(item)} className='btn btn-dark mt-1 span2'>Edit</button>

        </div >
    )
}

export default ExpensesDetails