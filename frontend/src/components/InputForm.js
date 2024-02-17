import React from 'react'
import { useState } from 'react'
import useAppHook from '../context/useAppHook'

const InputForm = ({ expensesData, setShouldFetch, setCountry={setCountry}, setExpenditureItem={setExpenditureItem}, setPrice={setPrice}, setRemarks={setRemarks}, remarks, price, expenditureItem, country, isEditing, setIsEditing, expenseID }) => {

    // const [country, setCountry] = useState("")
    // const [expenditureItem, setExpenditureItem] = useState("")
    // const [price, setPrice] = useState("")
    // const [remarks, setRemarks] = useState("")
    const [error, setError] = useState("")

    const { user } = useAppHook()

    console.log(expenseID)

    const submitHandler = async (e) => {
        e.preventDefault()


        console.log(user)

        // if (!user) {

        //     setError('you must be logged in')
        //     return

        // }

        if (!user) {
            console.log('you are not logged in')
            setError('you must be logged in')
            return
        }

        const expense = { country, expenditureItem, price, remarks }

        const response = await fetch(`https://fs104backendproject.onrender.com/api/expenses/`, {
            method: 'POST',
            body: JSON.stringify(expense),
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        // if(!response.ok){
        //     setError(json.error)
        //     console.log(error)
        // }

        if (!response.ok) {
            console.log(json.error)
            setError("Please fill the empty fields. Remarks field is not necessary")
        }

        if (response.ok) {
            setCountry("")
            setPrice("")
            setRemarks("")
            setExpenditureItem("")
            setError("")

            console.log('new workout added', json)
            setShouldFetch(true)
            return expensesData = [...expensesData, json]
        }

    }


    const updateHandler = async(e) => {

        e.preventDefault()

        if (!user) {
            console.log('you are not logged in')
            setError('you must be logged in')
            return
        }

        const expense = { country, expenditureItem, price, remarks }

        const response = await fetch(`https://fs104backendproject.onrender.com/api/expenses/${expenseID}`, {
            method: 'PATCH',
            body: JSON.stringify(expense),
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        // if(!response.ok){
        //     setError(json.error)
        //     console.log(error)
        // }

        if (!response.ok) {
            console.log(json.error)
            setError("Please fill the empty fields. Remarks field is not necessary")
        }

        if (response.ok) {
            setCountry("")
            setPrice("")
            setRemarks("")
            setExpenditureItem("")
            setError("")
            setIsEditing(false)

            console.log('expense updated', json)
            setShouldFetch(true)
            return expensesData = [...expensesData, json]
        }
    }
 



    return (
        <div>
            <form className='p-3 bg-light inputForm' onSubmit={isEditing? updateHandler :submitHandler}>
                <h3 className='text-center fs-4 text-dark'>Add a New Expenditure</h3>

                <label className='mb-1'>Country</label>
                <input className='mb-3' type='text' name='country' value={country} onChange={(e) => setCountry(e.target.value)}
                />

                <label className='mb-1'>Expenditure Item</label>
                <input className='mb-3' type='text' name='expenditure_item' value={expenditureItem} onChange={(e) => setExpenditureItem(e.target.value)}
                />

                <label className='mb-1'>Price</label>
                <input className='mb-3' type='number' name='price' value={price} onChange={(e) => setPrice(e.target.value)}
                />

                <label className='mb-1'>Remarks</label>
                <input className='mb-3' type='text' name='Remarks' value={remarks} onChange={(e) => setRemarks(e.target.value)}
                />

                <button className='btn btn-primary'>{isEditing? "Update" : 'Submit'}</button>

            </form>
            {error && <p className='text-danger  text-center'>{error}</p>}
        </div>
    )
}

export default InputForm