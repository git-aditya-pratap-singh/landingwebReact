import React from "react";
import internet from "./img/internet.jpg";

const Internet = () =>{
    return(
        <>
         {/* here is a main section */}
        <div className="flex flex-col md:flex-row gap-5 p-5 justify-center items-center md:flex-row-reverse">

             {/* here is a image section */}
            <div className="h-64 w-64">
                <img src={internet} alt="Error" className="bg-cover"/>
            </div>
           
            {/* here is a message section */}
            <div className="max-w-[450px] p-5 flex flex-col gap-y-5 items-center sm:place-items-start">
                
                 {/* here is a heading section */}
                <div className="leading-relaxed ">
                   <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold antialiased font">One click to a safer</h2>
                   <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold antialiased font">internet</h2>
                </div>

                <p className="font-semibold text-gray-600 text-[14px] text-justify">Going online doesn't have to mean being exposed, Whether
                you're shopping from your desk or just connecting ata cafe. keep your personal information more private and secure.</p>
                
            </div>
        </div>
        </>
    )
}
export default Internet;