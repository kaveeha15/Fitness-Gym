'use client'
import { useState } from "react";

const Tabs = () => {

const[type,setType]=useState('manual')
const Tabs=[
    {
        id:'manual',
        label:'Fully Manual Mode',
        description:'manu'
    },
     {
        id:'assistance',
        label:'AI Assist Mode',
        description:'ai'
    },
     {
        id:'auto',
        label:'Auto Mode',
        description:'auto'
    }
]
    const handleClick=(id)=>{
    setType(id)
    }

    return ( 
<div className="tabContainer flex gap-1  justify-center p-1 rounded-3xl bg-gray-900">
    {
        Tabs.map(tab=>(
            <div key={tab.id} onClick={()=>handleClick(tab.id) } className={`py-1 px-2 rounded-3xl cursor-pointer font-semibold ${type===tab.id? "bg-gray-700":" "}`}>
                
                <p>{tab.label}</p>
            </div>
        ))
    }
</div>

     );
}
 
export default Tabs;