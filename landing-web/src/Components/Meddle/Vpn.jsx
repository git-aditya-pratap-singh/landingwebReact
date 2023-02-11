import React from "react";
import vpn from "./img/vpn.jpg";
import { AiFillWindows, AiFillApple, AiFillAndroid } from "react-icons/ai";
import { DiLinux } from "react-icons/di";
import { FaUserSecret } from "react-icons/fa";

const Vpn = () =>{
    return(
        <>
         {/* here is a main section */}
        <div className="flex flex-col md:flex-row gap-5 p-11 justify-center items-center">

             {/* here is a image section */}
            <div className="h-64 w-64">
                <img src={vpn} alt="Error" className="bg-cover"/>
            </div>
           
            {/* here is a message section */}
            <div className="max-w-[450px] p-5 flex flex-col gap-y-5 items-center sm:place-items-start">
                
                 {/* here is a heading section */}
                <div className="leading-relaxed ">
                   <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold antialiased font">Use ExpressVPN on</h2>
                   <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold antialiased font">every device</h2>
                </div>

                <p className="font-semibold text-gray-600 text-[14px] text-justify">Phone, tablet, computer, router-no matter where you are
                or what device you're using a single ExpressVPN subscription has got you covered.</p>

                {/* here is a icon section */}
                <div className="flex flex-row space-x-3 items-center">
                    <div className="bg-gray-200  p-3 rounded-md"><AiFillWindows size="18"/></div>
                    <div className="bg-gray-200  p-3 rounded-md"><AiFillApple sixe="18"/></div>
                    <div className="bg-gray-200  p-3 rounded-md"><AiFillAndroid size="18"/></div>
                    <div className="bg-gray-200  p-3 rounded-md font-bold text-[10px]">ICB</div>
                    <div className="bg-gray-200  p-3 rounded-md"><DiLinux size="18"/></div>
                    <div className="bg-gray-200  p-3 rounded-md"><FaUserSecret size="18"/></div>
                </div>

                <a className="text-green-600 underline">See all apps-</a>

                <button className="flex flex-row items-center gap-x-2 px-6 py-3 rounded-full bg-[#FF731D] 
                text-white font-semibold ">Get ExpressVPN</button>

            </div>
        </div>
        </>
    )
}
export default Vpn;