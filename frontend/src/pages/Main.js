import React from 'react'
import InputForm from '../components/InputForm'
import background from '../images/main-hero.jpg'
import ExpensesDetails from './ExpensesDetails'
import { useEffect, useState } from 'react'
import useAppHook from '../context/useAppHook.js'

const Main = () => {

    const [expensesData, setExpensesData] = useState([])
    const [shouldFetch, setShouldFetch] = useState(true);

    const {user} = useAppHook();

    
    const [country, setCountry] = useState("")
    const [expenditureItem, setExpenditureItem] = useState("")
    const [price, setPrice] = useState("")
    const [remarks, setRemarks] = useState("")
    const [expenseID, setExpenseID] = useState('')

    const [isEditing, setIsEditing] = useState(false)

    // useEffect(() => {
    //     const fetchExpenses = async () => {
    //         try {
    //             const data = await fetch("/api/expenses");
    //             const response = await data.json();

    //             console.log(response);

    //             // Update expensesData only if it has changed
    //             // if (JSON.stringify(response) !== JSON.stringify(expensesData)) {
    //             //     setExpensesData(response);
    //             // }

    //             setExpensesData(response);

    //         } catch (error) {
    //             console.error("Error fetching expenses:", error);
    //         }
    //     };

    //     fetchExpenses();
    // }, [expensesData]);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const data = await fetch("https://fs104backendproject.onrender.com/api/expenses", {
                    headers:{
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                const response = await data.json();

                console.log(response);

                setExpensesData(response);
                setShouldFetch(false); // Reset shouldFetch after fetching data

            } catch (error) {
                console.error("Error fetching expenses:", error);
            }
        };

        if (shouldFetch) {
            fetchExpenses();
        }

        if(user) {
            fetchExpenses();
        }
    }, [shouldFetch, user]);
// shouldFetch function to prevent infinite loops



    return (

        <div className='mb-5'>
            <img className='bg-positioning' src={background} alt="" />

            <div className='home container mt-5'>

                <div>
                    {expensesData && expensesData.map((item) => {
                        return <ExpensesDetails expensesData={expensesData} key={item._id} item={item} {...item} shouldFetch={shouldFetch} setShouldFetch={setShouldFetch} setCountry={setCountry} setExpenditureItem={setExpenditureItem} setPrice={setPrice} setRemarks={setRemarks} isEditing={isEditing} setIsEditing={setIsEditing} expenseID={expenseID} setExpenseID={setExpenseID}/>
                    })}
                </div>


                <InputForm expensesData={expensesData} shouldFetch={shouldFetch} setShouldFetch={setShouldFetch} setCountry={setCountry} setExpenditureItem={setExpenditureItem} setPrice={setPrice} setRemarks={setRemarks} country={country} expenditureItem={expenditureItem} price={price} remarks={remarks} isEditing={isEditing} setIsEditing={setIsEditing} expenseID={expenseID} setExpenseID={setExpenseID}/>
            </div>
        </div>

    )
}

export default Main