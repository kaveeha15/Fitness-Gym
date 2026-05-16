import { db } from "@/services/db";
import {doc,deleteDoc} from 'firebase/firestore'

export const deleteUser=async(docId)=>{
const docRef=doc(db,'users',docId)
await deleteDoc(docRef)
}
