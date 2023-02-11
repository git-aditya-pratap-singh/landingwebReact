import React from "react";
import { BiExclude } from "react-icons/bi";
import './font.css';

const Navbar = () =>{
    return(
        <>
        {/* Navigation Bar */}
        <div className="w-full flex flex-row items-center p-5 justify-between fixed">

            {/* logo with Name of Navigation bar*/}

           <div className="flex flex-row items-center gap-x-3 font-semibold text-xl text-[#FF731D] font">
               <span className="animate-spin"><BiExclude/></span>ExpressVPN
           </div>

            {/* Select box */}
            <div>
            <select className="outline-0 p-3 rounded-md bg-transparent text-[#FF731D]">
                <option className="bg-gray-800 ">English</option>
                <option className="bg-gray-800">Hindi</option>
                <option className="bg-gray-800">France</option>
            </select>
           </div>

        </div>
        </>
    )
}
export default Navbar;