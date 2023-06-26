import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const reducer = (state, action) =>{
    switch(action){
        case 'up':
            return state+1
        case 'down':
            return state-1
        default:
            return 0
    } 
}

export default function UseReducerDemo(){
    
    const [count,dispatch] = useReducer(reducer, 0);

    return(
        <>
            <h1>{count}</h1>

            <button type="button" onClick={() => dispatch('up')}>up</button>
            <button type="button" onClick={() => dispatch('down')}>down</button>
        </>
    )

}