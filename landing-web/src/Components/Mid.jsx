import React from "react";
import Secure from "./Meddle/Secure";
import Internet from "./Meddle/Internet";
import Vpn from "./Meddle/Vpn";
import Items from "./Meddle/Items";
const Mid = () =>{
    return(
        <>
        <Secure/>
        <Internet/>
        <Vpn/>
        <Items/>
        </>
    )
}
export default Mid;