import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/services/db'



export const updateDocument = async (docId: string, colName: string, updatedData: any) => {
    try {
            const docRef=doc(db,colName,docId)
            await updateDoc(docRef,updatedData)
    } catch (err) {
        throw new Error('Update Faild')
    }
}