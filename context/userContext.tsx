'use client'

import { getUsers } from "@/util/getData";
import { createContext,useEffect,useState } from "react";


export const UserContext=createContext([])

export const UserContextWrapper=({children})=>{
    const[isLoading,setIsLoading]=useState(false)
    const[err,setErr]=useState(null)
    const[users,setUsers]=useState([])

    const fetchData=async()=>{
        const data=await getUsers()
        setUsers(data)
    }
    useEffect(()=>{
        fetchData()
    },[])


    return(
            <UserContext.Provider value={{isLoading,err,users}}>
                    {children}
            </UserContext.Provider>

    )
}
