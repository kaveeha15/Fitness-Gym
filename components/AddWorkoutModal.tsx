'use client'
import { IoClose } from "react-icons/io5";
import Tabs from "./UI/Tab";
import { useState } from "react";


const AddWorkoutModal = ({ setter }) => {
    const [focusAreas,setFocusAreas]=useState([
        {
            name:'Shoulders',
            selected:false
        },
         {
            name:'Chest',
            selected:false
        },
         {
            name:'Tricep',
            selected:false
        },
         {
            name:'Biceps',
            selected:false
        },
         {
            name:'Foreams',
            selected:false
        },
         {
            name:'Back',
            selected:false
        },
         {
            name:'Legs',
            selected:false
        },
         {
            name:'Core',
            selected:false
        },
         {
            name:'Cardio',
            selected:false
        }
    ])
    const handleFocusClick=(index)=>{
        setFocusAreas((prev)=>(prev.map((item,i)=>i===index?{...item,selected:!item.selected}:item)))
    }

    return (
        <div className=" flex bg-gray-600/60 items-center justify-center fixed z-50 inset-0">
            <div className="  flex flex-col shadow-lg  bg-[#000000]/30 rounded-2xl max-w-4xl w-[90vw] h-[90vh] backdrop-blur-xl text-white p-4">


                {/* heading */}
                <div className="flex flex-col">
                    <div className="flex mt-4 justify-between ">
                        <p className="font-semibold text-3xl">Add Workout Schedule</p> <IoClose size={30} onClick={() => setter(false)} />  </div>
                    <p className="text-1xl">Create a comprehensive workout program</p>

                </div>
                {/* AI Tabs */}
                <div className="flex flex-col my-4 items-center gap-2 justify-center font-semibold text-lg">
                    <p>AI Assistance Mode</p>
                       <Tabs />
                </div>
             
                {/* Shedule */}
                <div className="flex gap-4 mt-4">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="title">Workout Title</label> 
                         <input  id='title' type="text" placeholder="Basic Schedule" className=" bg-gray-500 rounded-lg px-2 py-1" />
                    </div>
                       <div className="flex flex-col flex-1">
                        <label htmlFor="frequency">Frequency</label> 
                         <input  id='frequency' type="text" placeholder="3 days per week" className=" bg-gray-500 rounded-lg px-2 py-1" />
                    </div>
                       <div className="flex flex-col flex-1">
                        <label htmlFor="duration">Duration</label> 
                         <input  id='duration' type="text" placeholder="Duration 3 months" className=" bg-gray-500 rounded-lg px-2 py-1" />
                    </div>
                        
                      
                </div>
                {/* Focus list */}
                 <div className="mt-4">
                    <p>Focus Areas</p>
                      <div className="flex mt-2 gap-4 flex-wrap">
                    {
                        focusAreas.map((item,index)=>
                            <div onClick={()=>{handleFocusClick(index)}} key={index} className={` flex  ${item.selected?'bg-[#2edbdb]':'bg-gray-500'} rounded-2xl px-2 py-1 cursor-pointer justify-around`}>

                                <p>{item.name}</p>

                            </div>
                        )
                    }
                </div>
                </div>
              
            </div>
        </div>
    );
}

export default AddWorkoutModal;




