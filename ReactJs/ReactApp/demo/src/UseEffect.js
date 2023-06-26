import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

//Syntax:
// useEffect(<function>, <dependency>)

// useEffect(() => {
//     //Runs only on the first render
//   }, []);

// useEffect(() => {
//     //Runs on every render
// });

// useEffect(() => {
//     //Runs on the first render
//     //And any time any dependency value changes
//   }, [prop, state]);

// function UseEffectDemo(){
    
//     const [count,setCount] = useState(0);

//     useEffect(
//         () => {
//             console.log('Count '+count);
//             setCount(
//                 count => count = count + 1
//             );
//         },[]
//     )
//     return(
//         <>
//             <h1>Hello ATS</h1>
//         </>
//     )
// }




function getRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }

const hiddenNumber = getRandomNumber();


function UseEffectDemo(){

    const [count, setCount] = useState(0);

    if(count==0)
        console.log(hiddenNumber);


    useEffect(
        () => {
            if(count == hiddenNumber){
                alert('Stopped!')
            }
        }, [count]
    );

    return(
        <>
        <h1>You clicked {count} time(s)</h1>
        <button type="button" onClick={() => setCount((c) => c+1)}>
            Click
        </button>
        </>
    )
}

export default UseEffectDemo;
