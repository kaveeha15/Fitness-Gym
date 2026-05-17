'use client'
import { useState } from "react";
import { IoClose } from "react-icons/io5";
const EditUserModel = ({ setter, user }) => {
const [inputData,setInputData]=useState({
    name:'',
    age:'',
    email:'',
    contact:'',
    memNo:'',
    gender:'',
    height:'',
    weight:'',
    membership:''


})
const handleChange=(field,value)=>{
    setInputData((prev)=>({...prev,[field]:value}))

}
console.log('input data',inputData)

    return (
        <div className="flex bg-gray-600/10 items-center justify-center fixed z-50 inset-0  ">
            <div className="  flex flex-col shadow-lg  bg-[#000000]/70 rounded-2xl max-w-4xl w-[80vw] h-[80vh] backdrop-blur-xl text-white p-4">
                {/* Heading */}
                <div className="flex justify-between">
                    <div className="flex flex-col ">
                        <p className="font-semibold text-3xl font-stretch-semi-expanded">Edit member Information</p>
                        <p className="text-1xl font-bold text-gray-500 font-stretch-extra-expanded">Keep memeber details accurate and up to date</p>
                    </div>
                    <IoClose size={30} onClick={() => setter(false)} />
                </div>
                {/*User info section  */}
                <div className="userInfoContainer flex justify-around bg-[#11213344]  font-stretch-ultra-condensed mt-5 py-5 rounded-xl">
                    <div className="flex-col ">
                        <p className="font-bold  mt-2">User Name:<span className="font-normal">{user.name}</span></p>
                        <p className="font-bold  mt-2">Age:<span className="font-normal"> {user.age}</span></p>
                        <p className="font-bold   mt-2">Email: <span className="font-normal">{user.email}</span></p>
                        <p className="font-bold mt-2">Contact Number: <span className="font-normal">{user.pno}</span></p>
                        <p className="font-bold  mt-2">Membership Number: <span className="font-normal">{user.no}</span></p>


                    </div>
                    <div className="flex-col ">
                        <p  className="font-bold mt-2">Gender: <span className="font-normal">{user.gender}</span></p>
                        <p  className="font-bold mt-2">Height: <span className="font-normal">{user.height}</span></p>
                        <p  className="font-bold mt-2">Weight: <span className="font-normal">{user.weight}</span></p>
                        <p  className="font-bold mt-2">Membership: <span className="font-normal">{user.membership}</span> </p>
                        <p  className="font-bold mt-2">Status: <span className="font-normal">{user.status ? 'Active' : 'Inactive'}</span> </p>
                    </div>

                </div>
                {/* Input section */}
                <div className="inputContainer mt-10 flex font-stretch-condensed gap-30">
                    <div className="flex-col ">
                        <div className="flex mt-4">
                            <label htmlFor="un" className="bg-[#2c2e3144] font-bold  px-4 py-2 rounded-2xl w-50">User Name</label>
                            <input type="text"  onChange={(e)=>handleChange('name',e.target.value)}    id="un" className="bg-[#d8dde2e3]  text-black rounded-xl mx-[-20] px-3" />
                        </div>
                        <div className="flex mt-4">
                            <label htmlFor="age" className="bg-[#2c2e3144]  font-bold px-4 py-2 rounded-2xl w-50">Age</label>
                            <input type="text" onChange={(e)=>handleChange('age',e.target.value)}  id="age" className="bg-[#d8dde2e3]  text-black rounded-xl mx-[-20] px-3" />
                        </div>

                        <div className="flex mt-4">
                            <label htmlFor="email" className="bg-[#2c2e3144] font-bold  px-4 py-2 rounded-2xl w-50">E-mail</label>
                            <input type="text" onChange={(e)=>handleChange('email',e.target.value)}  id="email" className="bg-[#d8dde2e3]  text-black rounded-xl mx-[-20] px-3" />
                        </div>
                        <div className="flex mt-4">
                            <label htmlFor="num" className="bg-[#2c2e3144] font-bold  px-4 py-2 rounded-2xl w-50">Contact Number</label>
                            <input type="text"  onChange={(e)=>handleChange('contact',e.target.value)}id="num" className="bg-[#d8dde2e3]   text-black rounded-xl mx-[-20] px-3" />
                        </div>
                        <div className="flex mt-4">
                            <label htmlFor="mem" className="bg-[#2c2e3144] font-bold  px-4 py-2 rounded-2xl w-50">Membership Number</label>
                            <input type="text" onChange={(e)=>handleChange('memNo',e.target.value)} id="mem" className="bg-[#d8dde2e3]  text-black rounded-xl mx-[-20] px-3" />
                        </div>
                    </div>

                    <div className="flex-col">
                        <div className="flex mt-4">
                            <label htmlFor="gen" className="bg-[#2c2e3144] font-bold px-4 py-2 rounded-2xl w-50">Gender</label>
                             <select id="gender" onChange={(e)=>handleChange('gender',e.target.value)}className="bg-[#d8dde2e3]  text-black rounded-xl mx-[-20] w-48 px-3" >
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </select>
                            </div>
                        <div className="flex mt-4">
                            <label htmlFor="hei" className="bg-[#2c2e3144] font-bold px-4 py-2 rounded-2xl w-50">Height(cm)</label>
                            <input type="text" onChange={(e)=>handleChange('height',e.target.value)} id="hei" className="bg-[#d8dde2e3]  text-black rounded-xl mx-[-20] w-48 px-3" />
                        </div>

                        <div className="flex mt-4">
                            <label htmlFor="wei" className="bg-[#2c2e3144] font-bold  px-4 py-2 rounded-2xl w-50">Weight(kg)</label>
                            <input type="text" onChange={(e)=>handleChange('weight',e.target.value)} id="wei" className="bg-[#d8dde2e3]  text-black rounded-xl mx-[-20] w-48 px-3" />
                        </div>
                        <div className="flex mt-4">
                            <label htmlFor="mem" className="bg-[#2c2e3144] font-bold  px-4 py-2 rounded-2xl w-50">Membership</label>
                            <input type="text" onChange={(e)=>handleChange('memeber',e.target.value)} id="mem" className="bg-[#d8dde2e3]  text-black rounded-xl mx-[-20] px-3 w-48" />
                        </div>
                        <div className="flex mt-4">
                            <label htmlFor="status" className="bg-[#2c2e3144] font-bold  px-4 py-2 rounded-2xl w-50">Status</label>
                            <select id="status" onChange={(e)=>handleChange('status',e.target.value)} className="bg-[#d8dde2e3]  text-black rounded-xl mx-[-20] w-48 px-3" >
                                <option value='active'>Active</option>
                                <option value='inactive'>Inactive</option>
                            </select>
                        </div>
                         <div className="flex mx-53 gap-2 mt-4">
                            <div className="rounded-xl bg-gray-700 text-white px-3 py-2 cursor-pointer"><p>Confirm</p></div>
                            <div className="rounded-xl bg-red-600 text-white px-3 py-2 cursor-pointer" onClick={() => setter(false)} ><p>Cancel</p></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>










    );
}

export default EditUserModel;