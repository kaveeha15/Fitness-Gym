import { db } from "@/services/db"
import { collection,getDocs,onSnapshot } from "firebase/firestore"
import { on } from "process"
import { Dispatch, SetStateAction } from "react"

export const getUsers=async()=>{
const colRef=collection(db,'users')
const qSnap=await getDocs(colRef)

const userList=qSnap.docs.map((doc)=>({
    id:doc.id,
    ...doc.data()
}))
console.log('userList',userList)
return userList
}

export const subscribeToUsers=(setUsers:Dispatch<SetStateAction<any>>,setErr:Dispatch<SetStateAction<null|string>>,setIsLoading:Dispatch<SetStateAction<boolean>>)=>{
setErr(null)
setIsLoading(true)
const colRef=collection(db,'users')
const unsubscribe=onSnapshot(colRef,(snapShot)=>{
    const userList=snapShot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
    }))
    setUsers(userList)
    setIsLoading(false)
},(error)=>{
    setErr(error.message??'Unkown Error')
})
return unsubscribe
}