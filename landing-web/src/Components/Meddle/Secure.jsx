import React from "react";
import coder from "./img/coder.png";

const Secure = () =>{
    return(
        <>
        {/* Here is a main section */}
        <div className="flex flex-col md:flex-row gap-5 p-11 justify-center items-center">

            {/* here is a image section */}
            <div className="h-72 w-72">
                <img src={coder} alt="Error" className="bg-cover"/>
            </div>
           
            {/* here is a message section */}
            <div className="max-w-[450px] p-5 flex flex-col gap-y-5 items-center sm:place-items-start">
                
                {/* here is a heading section */}
                <div className="leading-relaxed ">
                   <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold antialiased font">Secure access,</h2>
                   <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold antialiased font">worldwide</h2>
                </div>
                
                <p className="font-semibold text-gray-600 text-[14px] text-justify">Connect reliably from anywhere, to anywhere. Our network of high-speed servers across 94 countries 
                    puts you in control.</p>

                <button className="flex flex-row items-center gap-x-2 px-6 py-3 rounded-full bg-[#FF731D] 
                   text-white font-semibold ">Get ExpressVPN</button>

            </div>
        </div>
        </>
    )
}
export default Secure;