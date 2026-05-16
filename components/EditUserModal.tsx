import { IoClose } from "react-icons/io5";
const EditUserModel = ({ setter, user }) => {


    return (
        <div className="flex bg-gray-600 items-center justify-center fixed z-50 inset-0  ">
            <div className="  flex flex-col shadow-lg  bg-[#000000]/30 rounded-2xl max-w-4xl w-[90vw] h-[90vh] backdrop-blur-xl text-white p-4">

                <div className="flex flex-col">
                    <div className="flex mt-4 justify-between ">
                        <p className="font-semibold text-3xl">Edit member Information</p> <IoClose size={30} onClick={() => setter(false)} />
                    </div>
                    <p className="text-1xl">Keep memeber details accurate and up to date</p>

                </div>
                <div className="flex flex-col bg-gray-500/50 rounded-2xl w-210">

                    <div className="flex  w-210">
                        <div>
                            <p>User Name:</p>
                            <p>{user.name}</p>
                        </div>

                        <div><p>Age: </p>
                            <p>{user.age}</p>

                        </div>
                        <div>
                            <p>Email:</p>
                            <p>{user.email}</p>
                        </div>
                        <div><p>Contact Number:</p>
                            <p>{user.pno}</p>
                        </div>
                        <div>

                            <p>Membership Number:</p>
                            <p>{user.no}</p>
                        </div>
                    </div>
                    <div className="flex w-210">

                        <div>
                            <p>Gender:</p>
                            <p>{user.gender}</p>
                        </div>

                        <div>   <p>Height:</p>
                            <p>{user.height}</p>

                        </div>
                        <div>
                            <p>Weight:</p>
                            <p>{user.weight}</p>
                        </div>
                        <div>    <p>Membership:</p>
                            <p>{user.no}</p>
                        </div>
                        <div>

                            <p>Status:</p>
                            <p>{user.status ? 'Active' : 'Inactive'}</p>
                        </div>





                    </div>
                </div>
                <div className="flex flex-col ">
                    <div>
                        <div className="flex flex-col flex-1">
                            <label htmlFor="un" className="rounded-lg">User Name</label>
                            <input id='un' type="text" className=" bg-gray-500 rounded-lg px-2 py-1" />
                        </div>
                         <div className="flex flex-col flex-1">
                            <label htmlFor="age" className="rounded-lg">Age</label>
                            <input id='age' type="text" className=" bg-gray-500 rounded-lg px-2 py-1" />
                        </div>
                         <div className="flex flex-col flex-1">
                            <label htmlFor="email" className="rounded-lg">Email</label>
                            <input id='email' type="text" className=" bg-gray-500 rounded-lg px-2 py-1" />
                        </div>
                         <div className="flex flex-col flex-1">
                            <label htmlFor="pno" className="rounded-lg">Contact Number</label>
                            <input id='pno' type="text" className=" bg-gray-500 rounded-lg px-2 py-1" />
                        </div>
                         <div className="flex flex-col flex-1">
                            <label htmlFor="mno" className="rounded-lg">Membership Number</label>
                            <input id='mno' type="text" className=" bg-gray-500 rounded-lg px-2 py-1" />
                        </div>
                    </div>
                    <div>
                         <div className="flex flex-col flex-1">
                            <label htmlFor="gen" className="rounded-lg">Gender</label>
                            <input id='gen' type="text" className=" bg-gray-500 rounded-lg px-2 py-1" />
                        </div>
                         <div className="flex flex-col flex-1">
                            <label htmlFor="hei" className="rounded-lg">Height</label>
                            <input id='hei' type="text" className=" bg-gray-500 rounded-lg px-2 py-1" />
                        </div>
                         <div className="flex flex-col flex-1">
                            <label htmlFor="wei" className="rounded-lg">weight</label>
                            <input id='wei' type="text" className=" bg-gray-500 rounded-lg px-2 py-1" />
                        </div>
                         <div className="flex flex-col flex-1">
                            <label htmlFor="mem" className="rounded-lg">Membership</label>
                            <input id='mem' type="text" className=" bg-gray-500 rounded-lg px-2 py-1" />
                        </div>
                         <div className="flex flex-col flex-1">
                            <label htmlFor="status" className="rounded-lg">Status</label>
                            <select  className=" bg-gray-500 rounded-lg px-2 py-1">
                            <option value={'active'}>Active</option>
                            <option value={'inactive'}>Inactive</option>
                            </select>
                        </div>
                        <div>
                            <div className="rounded-xl bg-gray-700 text-white"><p>Confirm</p></div>
                            <div className="rounded-xl bg-red-600 text-white"><p>Cancel</p></div>
                        </div>
                    </div>
                </div>


            </div>
        </div>










    );
}

export default EditUserModel;