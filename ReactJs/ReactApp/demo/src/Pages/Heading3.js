import ReactDOM from "react-dom/client";
import { memo } from "react";

function Heading3(props){
    console.log('rendering heading3');
    return(
        <>
            <h1>Hello ATS</h1>
            <button onClick={props.onIncrease}>Count</button>
        </>
    )
}
export default memo(Heading3);