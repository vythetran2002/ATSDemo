import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Heading3 from "./Pages/Heading3";

export default function UseCallBackDemo(){

    const [count,setCount] = useState(0);

    const handlingCount = () =>{
        setCount(
            count => count+=1
        );
    }

    // const handlingCount = useCallback(() => {
    //     setCount(count => count+=1);
    // },[count]);

    return(
        <>
            <Heading3 onIncrease={handlingCount} />
            <h1>{count}</h1>
        </>
    )
}