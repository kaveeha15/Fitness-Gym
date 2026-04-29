'use client'
import { MdSearch } from "react-icons/md";
import { MdFilterAlt } from "react-icons/md";
import { userData } from './data'
import { useRouter } from "next/navigation";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { getUsers } from "@/util/getData";

const Members = () => {
  getUsers()
    const router=useRouter();
    const handleClick=(id)=>{
        router.push(`/members/${id}`)
    }
    return (
        <div className="flex flex-col">
            {/* heading */}
            <div className="heading flex justify-between px-10">
                <div>
                    <h1 className="text-2xl text-gray-500">Members</h1>
                    <p>Manage your gym members and there memberships</p>
                </div>
                <div className="btn flex items-center px-2 rounded-md bg-[#11223391]">
                    <p>+ Add Member</p>
                </div>
            </div>
            {/* search bar */}
            <div className="flex bg-gray-600 mx-10 items-center p-2 rounded-md my-10 gap-2 ">
                <div className="flex flex-1 p-2 bg-gray-300 items-center rounded-md gap-2 " >
                    <MdSearch />
                    <input type="text" className="w-full" placeholder="member name or mobile number" />
                </div>
                <div className="filter flex items-center gap-2 bg-white rounded-md">
                    <MdFilterAlt />
                    <select name="Status" className="p-2">
                        <option value={'all'}>All Status</option>
                        <option value='active'>Active</option>
                        <option value='inactive'>Inactive</option>
                    </select>
                </div>
            </div>
            {/* member details table */}

            <div className="memData px-10">

                {/* Header Row */}
                <div className="flex   justify-around bg-gray-600 p-3 text-white rounded-t-md ">
                    <h3 className="flex-1 ">Member</h3>
                    <h3 className="flex-1 ">Contact</h3>
                    <h3 className="flex-1 ">Membership</h3>
                    <h3 className="flex-1 ">Status</h3>
                    <h3 className="flex-1 ">Join Date</h3>
                    <h3  className="flex-1 ">Action</h3>
                </div>

                {/* Data Rows */}
                {userData.map((user, index) => (
                    <div key={index} className="flex items-center bg-gray-100 p-3 border-b" onClick={()=>{handleClick(user.no)}}>


                        <div className=" flex flex-1 gap-3 ">
                            <div className=" flex  bg-gray-700 justify-center items-center rounded-full text-white  w-10 h-10" ><p >{user.name.slice(0,2).toUpperCase()}</p></div>
                           <div className="flex flex-col"> 
                             <p className="text-sm ">{user.name}</p>
                              <p className="text-sm ">{user.no}</p>
                            </div>
                        </div>


                        <div className="flex  flex-1 flex-col">
                            <div className="flex gap-1 items-center"><IoIosCall /><p>{user.pno}</p></div>
                           <div className="flex gap-1 items-center"><MdEmail /> <p className="text-sm ">{user.email}</p></div>
                        </div>


                        <div className="flex  flex-1 ">
                            <p>{user.membership}</p>
                        </div>


                        <div className="flex  flex-1">
                            <p className="px-2 bg-red-400 rounded-3xl w-20 text-center">{user.status?'Active':'Inactive'}</p>
                        </div>


                        <div className="flex  flex-1">
                            <p>{user.date}</p>
                        </div>


                        <div className=" flex-1 ">
                            <p>action</p>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );

}

export default Members;