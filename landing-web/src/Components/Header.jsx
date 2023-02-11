import React from "react";
import { FiArrowRight } from "react-icons/fi";
import './font.css';

const Header = () =>{
    return(
        <>
        {/* Set background Image into Header */}
        <div className="h-screen bg-[url('./assets/bb.jpg')] bg-no-repeat bg-cover ">
            
            {/* Glassey Effect margin/padding on the top */}
            <div className="px-5 pt-[10rem] my-auto">

                {/* Glassey Effect */}

                <div className="max-w-[800px] mx-auto items-center text-center flex flex-col 
                    p-5 space-y-5 backdrop-blur-sm bg-gray-400/30 rounded-lg">

                   <h1 className="text-6xl text-gray-800 font-bold antialiased font">The VPN that just works</h1>

                   <p className="text-gray-200 sm:text-gray-800 font-bold">Go further with the #1 trusted leader in VPN</p>

                   <button className="flex flex-row items-center gap-x-2 px-6 py-3 rounded-full bg-[#FF731D] 
                   text-white font-semibold">Get ExpressVPN<FiArrowRight/></button>
                   
                   <p className="text-gray-900 font-bold text-[12px] sm:text-[10px]">30-DAY MONEY-BACK GURANTEE</p>

                </div>

            </div>
           
        </div>
        </>
    )
}
export default Header;