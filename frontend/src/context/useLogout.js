import useAppHook from "./useAppHook"


export const useLogout = () => {

    const {dispatch} = useAppHook()

    const logout = () => {

        //remove user from storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type:'LOGOUT'})
    }

    return {logout}

}