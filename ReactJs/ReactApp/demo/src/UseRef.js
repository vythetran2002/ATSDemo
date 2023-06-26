import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

export default function UseRefDemo(){
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const countAll = useRef(0);

    useEffect(
        () => {
            countAll.current = countAll.current+1;
        }, [count1,count2]
    )

    return (
        <>
        <p>You have clicked this button {count1} time(s)</p>
        <button  onClick={() => setCount1((c) => c+1)}>Button1</button> <br></br>
        <p>You have clicked this button {count2} time(s)</p>
        <button  onClick={() => setCount2((c) => c+1)}>Button1</button> <br></br>
        <h1>You have clicked {countAll.current} time(s)</h1>
        </>
    )
}