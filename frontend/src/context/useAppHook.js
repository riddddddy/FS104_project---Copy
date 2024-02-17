import { useContext } from "react";
import { AppContext } from "./appContext";


const useAppHook = () => {
    const context = useContext(AppContext)

    if (!context) {
        throw Error("it must be used inside hte appContextProvider")
    }

  return context
}

export default useAppHook