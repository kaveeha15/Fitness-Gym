import { UserContext } from "@/context/userContext";
import { useContext } from "react";

export const useUserContextValue=()=>{
    const context=useContext(UserContext)
    if(!context){
        return Error('Context must be used within the boundary')
    }
    return context
}