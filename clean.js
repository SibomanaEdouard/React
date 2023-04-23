import { useState,useEffect } from "react";
import React from "react";

//learning how to clean unnecessary effects

function Clearing(){
    const [count,setCount]=useState(0);

    useEffect(()=>{
        let timing=setTimeout(()=>{
            setCount((count)=>count+1)
        },1000);
        return (()=>clearTimeout(timing));
    },[]);

    return(
        <div>
        <h1>Count is {count}</h1>
        </div>
    )
}


export default Clearing;