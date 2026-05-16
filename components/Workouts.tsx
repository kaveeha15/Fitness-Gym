'use client'
import AddWorkoutModal from "./AddWorkoutModal";
import { useState } from "react";

const Workouts = () => {
    const[isModalOpen,setIsModalOpen]=useState(false)
    const handleClick=()=>{
        setIsModalOpen(true)
    }
    return (
        <div className="flex flex-col mt-4">
            <div className="heading flex m-4">
                <div className="bg-gray-700 p-2 rounded-3xl font-semibold cursor-pointer text-white " onClick={handleClick}>
                    <p>+ Add Shedule</p>
                </div>
            </div>
                {isModalOpen&&<AddWorkoutModal setter={setIsModalOpen}/>}
        </div>
    );
}

export default Workouts;