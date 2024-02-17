import { createContext, useReducer, useEffect, useState} from "react";

export const AppContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload }
        
        case "SIGNUP":
            return { user: action.payload }

        case "LOGOUT":
            return {user:null}

        default:
            return state;
    }
}


export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    console.log("AuthContext state", state)


    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user')) || null;

        if(user){
            dispatch({type:"LOGIN", payload: user})
        }

    },[])

    
    return (
        <AppContext.Provider value={{...state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}