import React from "react";
import Data from "./Data";


const Card = (props) =>{
    return(
        <>
         {/* here is a card section */}
        <div className="max-w-[350px] p-5 flex flex-col items-center gap-y-5 mx-auto md:mx-0">
            
             {/* here is a image section */}
            <div className="w-52 h-52">
                <img src={props.img} alt="coder" className="object-cover w-52 h-52"/>
            </div>
            
             {/* here is a heading section */}
            <h1 className="text-gray-800 font-bold text-3xl font text-center">{props.head}</h1>

             {/* here is a paragraph section */}
            <p className="text-justify font-semibold text-gray-600 text-[14px] sm:text-[13px] px-8">{props.text}</p>
        </div>
        </>
    )
}

const Items = () =>{
    return(
        <>
        {/* here is a main section */}
        <div className="w-full md:py-11 flex flex-col md:flex-row  md:space-x-5 md:justify-center">
            {
                Data.map((elem)=>{
                    return(
                        <>
                        <Card
                         key = {elem.id}
                         img = {elem.img}
                         head = {elem.heading}
                         text = {elem.text}
                        />
                        </>
                    )
                })
            }
            
        </div>

        
        </>
    )
}
export default Items;