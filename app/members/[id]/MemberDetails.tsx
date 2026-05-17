'use client'
import { RiDeleteBinFill } from "react-icons/ri";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { MdSportsGymnastics } from "react-icons/md";
import { CgCalendarToday } from "react-icons/cg";
import { FaSackDollar } from "react-icons/fa6";
import { use, useState } from "react";
import Overview from "@/components/Overview";
import Workouts from "@/components/Workouts";
import Analytics from "@/components/Anaytics";
import { userData } from "../data";
import { useUserContextValue } from "@/hooks/useContextValues";
import Link from "next/link";
import { deleteUser } from '@/util/deleteUser'
import EditUserModel from "@/components/EditUserModal";
const MemberDetails = ({ id }) => {
    const [type,setType]=useState('overview');
    const [isEditOpen,setIsEditOpen]=useState(false)
    const {users}=useUserContextValue()
    console.log('users at memeberDetails',users)
    const user= users.find((item)=>(item.no==id))
    const components={
        overview:<Overview user={user}/>,
        workouts:<Workouts/>,
        analytics:<Analytics/>
    }
   
   console.log('id',id,user)
        const handleClick=(value)=>{
            setType(value)
        }

        const handleDelete=()=>{
        
            deleteUser(user.id)
        }
        const handleEdit=()=>{
            setIsEditOpen(true)
         }
        
    
    return (
        <div className="flex flex-col mx-5">
            {/* heading */}
            <div className="heading flex justify-between mx-4">

                <div className="flex gap-5">
                    <Link className="backBtn flex bg-gray-700 px-5 items-center justify-center rounded-2xl" href={'/members'}><IoChevronBackOutline color="white" /></Link>
                    <div className="userInfo">
                        <p>nimanshi</p>
                        <p>{id}</p>
                    </div>
                </div>
                <div className="flex gap-5  ">
                    <div className="btn flex items-center bg-gray-400 px-4 rounded-3xl w-30 justify-center gap-1 text-red-500" onClick={handleDelete}><RiDeleteBinFill color="red" /><p>Delate</p></div>
                    <div className="btn flex items-center bg-gray-400 px-4 rounded-3xl w-30 justify-center gap-1" onClick={handleEdit}><FaRegEdit /><p>Edit</p></div>
                </div>
                     {isEditOpen&&<EditUserModel setter={setIsEditOpen} user={user}/>} 
            </div>
            {/* cardsection */}
            <div className="memCard flex justify-between">
                <div className="flex flex-1 bg-gray-500 items-center justify-start p-10 rounded-3xl m-5 text-white font-semibold gap-3">
                    <FaChalkboardUser color="white" size={40} />
                    <p>Membership</p>
                </div>
                <div className="flex flex-1 bg-gray-500 items-center justify-start p-10 rounded-3xl m-5 text-white font-semibold gap-3">

                    <MdSportsGymnastics color="white" size={40} />
                    <div className="flex-col">
                        <p>Active Status</p>
                        <div className="actBtn bg-[#4cddbbb2] rounded-2xl px-2 flex justify-center items-center"><p>Active</p></div>
                    </div>

                </div>
                <div className="flex flex-1  bg-gray-500 items-center justify-start p-10 rounded-3xl m-5 text-white font-semibold gap-3">
                    <CgCalendarToday color="white" size={40} />

                    <p>Join Date</p>
                </div>
                <div className="flex flex-1 bg-gray-500 items-center justify-start p-10 rounded-3xl m-5 text-white font-semibold gap-3">
                    <FaSackDollar color="white" size={40} />
                    <div className="flex-col">
                        <p>Payment</p>
                        <div className="comBtn bg-[#4cddbbb2] rounded-2xl px-2 flex justify-center items-center"><p>Completed</p></div>
                    </div>

                </div>

            </div>
            {/* btnlist */}
            <div className="btnlist flex text-white font-semibold rounded-2xl bg-gray-700 p-6 w-fit gap-4 mx-4">
                <div 
                onClick={()=>{handleClick('overview')}}
                className={`${type==='overview'?'bg-gray-500':''} px-2 rounded-2xl cursor-pointer`}><p>Overview</p></div>
                <div
                  onClick={()=>{handleClick('workouts')}}
                className={`${type==='workouts'?'bg-gray-500':''} px-2 rounded-2xl cursor-pointer`}><p>Workout Shedule</p></div>
                <div 
                  onClick={()=>{handleClick('analytics')}}
                className={`${type==='analytics'?'bg-gray-500':''} px-2 rounded-2xl cursor-pointer`}><p>Analytics</p></div>
            </div>
            {
                components[type]
            }

        </div>
    );
}

export default MemberDetails;