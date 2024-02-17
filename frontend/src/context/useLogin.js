import { useContext, useState } from "react";
import { AppContext } from "./appContext.js";

export const useLogin = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const {dispatch} = useContext(AppContext)

    const login = async (email, password, name) => {
        setIsLoading(true)
        setError(null)
    
        const response = await fetch('https://fs104backendproject.onrender.com/api/user', {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, name})
        })
    
        const json = await response.json()
    
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
    
        if(response.ok){
            //save user to local storage
            localStorage.setItem('user', JSON.stringify(json))
    
            //update authcontext
            dispatch({type:'LOGIN', payload:json})

            setIsLoading(false)
        }
    }

    return {login, isLoading, error}
}

