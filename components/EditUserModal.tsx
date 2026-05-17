import { IoClose } from "react-icons/io5";
const EditUserModel = ({ setter, user }) => {


    return (
        <div className="flex bg-gray-600/10 items-center justify-center fixed z-50 inset-0  ">
            <div className="  flex flex-col shadow-lg  bg-[#000000]/30 rounded-2xl max-w-4xl w-[90vw] h-[90vh] backdrop-blur-xl text-white p-4">
                {/* Heading */}
                <div className="flex justify-between">
                    <div className="flex flex-col ">
                        <p className="font-semibold text-3xl">Edit member Information</p>
                        <p className="text-1xl">Keep memeber details accurate and up to date</p>
                    </div>
                    <IoClose size={30} onClick={() => setter(false)} />
                </div>
                {/*User info section  */}
                <div className="userInfoContainer flex justify-around bg-[#1e262e44]  mt-4 py-2 rounded-xl">
                    <div className="flex-col">
                        <p>User Name: {user.name}</p>
                        <p>Age: {user.age}</p>
                        <p>Email: {user.email}</p>
                        <p>Contact Number: {user.pno}</p>
                        <p>Membership Number: {user.no}</p>


                    </div>
                    <div className="flex-col">
                        <p>Gender: {user.gender}</p>
                        <p>Height(cm): {user.height}</p>
                        <p>Weight(kg): {user.weight}</p>
                        <p>Membership {user.membership}</p>
                        <p>Status: {user.status ? 'Active' : 'Inactive'}</p>
                    </div>

                </div>
                {/* Input section */}
                <div className="inputContainer flex gap-30">
                    <div className="flex-col ">
                        <div className="flex mt-4">
                            <label htmlFor="un" className="bg-[#2c2e3144] px-4 py-2 rounded-2xl w-50">User Name</label>
                            <input type="text" id="un" className="bg-[#d8dde2e3] rounded-xl mx-[-20] px-3" />
                        </div>
                        <div className="flex mt-4">
                            <label htmlFor="age" className="bg-[#2c2e3144] px-4 py-2 rounded-2xl w-50">Age</label>
                            <input type="text" id="age" className="bg-[#d8dde2e3] rounded-xl mx-[-20] px-3" />
                        </div>

                        <div className="flex mt-4">
                            <label htmlFor="email" className="bg-[#2c2e3144] px-4 py-2 rounded-2xl w-50">E-mail</label>
                            <input type="text" id="email" className="bg-[#d8dde2e3] rounded-xl mx-[-20] px-3" />
                        </div>
                        <div className="flex mt-4">
                            <label htmlFor="num" className="bg-[#2c2e3144] px-4 py-2 rounded-2xl w-50">Contact Number</label>
                            <input type="text" id="num" className="bg-[#d8dde2e3] rounded-xl mx-[-20] px-3" />
                        </div>
                        <div className="flex mt-4">
                            <label htmlFor="mem" className="bg-[#2c2e3144] px-4 py-2 rounded-2xl w-50">Membership Number</label>
                            <input type="text" id="mem" className="bg-[#d8dde2e3] rounded-xl mx-[-20] px-3" />
                        </div>
                    </div>

                    <div className="flex-col">
                        <div className="flex mt-4">
                            <label htmlFor="gen" className="bg-[#2c2e3144] px-4 py-2 rounded-2xl w-50">Gender</label>
                             <select id="gender" className="bg-[#d8dde2e3] rounded-xl mx-[-20] w-48 px-3" >
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </select>
                            </div>
                        <div className="flex mt-4">
                            <label htmlFor="hei" className="bg-[#2c2e3144] px-4 py-2 rounded-2xl w-50">Height(cm)</label>
                            <input type="text" id="hei" className="bg-[#d8dde2e3] rounded-xl mx-[-20] w-48 px-3" />
                        </div>

                        <div className="flex mt-4">
                            <label htmlFor="wei" className="bg-[#2c2e3144] px-4 py-2 rounded-2xl w-50">Weight(kg)</label>
                            <input type="text" id="wei" className="bg-[#d8dde2e3] rounded-xl mx-[-20] w-48 px-3" />
                        </div>
                        <div className="flex mt-4">
                            <label htmlFor="mem" className="bg-[#2c2e3144] px-4 py-2 rounded-2xl w-50">Membership</label>
                            <input type="text" id="mem" className="bg-[#d8dde2e3] rounded-xl mx-[-20] px-3 w-48" />
                        </div>
                        <div className="flex mt-4">
                            <label htmlFor="status" className="bg-[#2c2e3144] px-4 py-2 rounded-2xl w-50">Status</label>
                            <select id="status" className="bg-[#d8dde2e3] rounded-xl mx-[-20] w-48 px-3" >
                                <option value='active'>Active</option>
                                <option value='inactive'>Inactive</option>
                            </select>
                        </div>
                         <div className="flex mx-53 gap-2 mt-4">
                            <div className="rounded-xl bg-gray-700 text-white px-3 py-2 cursor-pointer"><p>Confirm</p></div>
                            <div className="rounded-xl bg-red-600 text-white px-3 py-2 cursor-pointer"><p>Cancel</p></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>










    );
}

export default EditUserModel;