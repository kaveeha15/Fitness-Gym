import { db } from "@/services/db"
import { collection,getDocs } from "firebase/firestore"

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

