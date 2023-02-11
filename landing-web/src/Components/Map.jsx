import React from "react";
import { FaInfinity } from "react-icons/fa";

const Map = () =>{
    return(
        <>
        {/* Set the Images of Maps */}
        <div className="h-screen bg-[url('./assets/map.jpg')] bg-no-repeat bg-center bg-cover ">

            <div className="pt-[10rem] p-5">
              <h1 className="text-4xl sm:text-5xl text-sky-800 font-bold text-center font">Ultra-fast servers around the globe.</h1>
            </div>
            
            {/* Maps list Data section */}
            <div className="w-[100px] flex flex-col space-y-11 mx-auto mt-20 sm:mx-[75%]">
               
              {/* Item-1 location */}
              <div className="flex flex-col space-y-1 w-[100px] text-gray-800">
                <h1 className="text-5xl font-bold text-center font">160</h1>
                <p className=" font-bold text-center font">location</p>
              </div>

              {/* Item-2 countries */}
              <div className="flex flex-col space-x-3 text-gray-800 w-[100px]">
                <h1 className="text-5xl  font-bold text-center font">94</h1>
                <p className="font-bold text-center font">countries</p>
              </div>

              {/* Item-3 bandwidth */} 
              <div className="flex flex-col space-x-3 w-[100px] text-gray-800 items-center">
                <h1 className="text-5xl font-bold text-center font"><FaInfinity size="50"/></h1>
                <p className="font-bold text-center font">unlimited bandwidth</p>
              </div>


            </div>
            
        </div>

        {/* Footer Design */}

        <div className="w-full bg-slate-900 text-center items-center py-5 px-3">
            <h1 className=" text-white font-semibold text-sm tab:text-[20px] md:text-[16px]">
                Created By <span className="text-[#FF731D]"><a href="https://www.linkedin.com/in/theaditya-pratap-singh/">Aditya Pratap Singh</a></span> | ©️ 2023 All rights reserved.</h1>
        </div>
        </>
    )
}
export default Map;