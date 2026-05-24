'use client'

import { getUsers } from "@/util/getData";
import { createContext,useEffect,useState } from "react";
import { subscribeToUsers } from "@/util/getData";

export const UserContext=createContext([])

export const UserContextWrapper=({children})=>{
    const[isLoading,setIsLoading]=useState(false)
    const[err,setErr]=useState(null)
    const[users,setUsers]=useState([])
    useEffect(()=>{
        const unsubscribe=subscribeToUsers(setUsers,setErr,setIsLoading)
        return ()=>unsubscribe()
    },[])

    return(
            <UserContext.Provider value={{isLoading,err,users}}>
                    {children}
            </UserContext.Provider>

    )
}
