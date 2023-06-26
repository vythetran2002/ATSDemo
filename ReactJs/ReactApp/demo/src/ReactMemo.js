import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Heading1 from "./Pages/Heading1";
import Heading2 from "./Pages/Heading2";

export default function ReactMemo(){
    
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);

    const clickHandling1 = () =>{
        setCount1(
            count => count = count+1
        );
    }

    const clickHandling2 = () =>{
        setCount2(
            count => count = count+1
        );
    }

    return(
        <>
            <Heading1 count={count1}></Heading1>
            <Heading2 count={count2}></Heading2>
            <hr/>
            <button 
            id = 'button1'
            type="button"
            onClick = {clickHandling1}
            style={{marginRight:'20px'}}
             >Heading 1 count</button>
            
            <button 
            id = 'button2'
            type="button"
            onClick = {clickHandling2}
             >Heading 2 count</button>
        </>
        
    )
}