import ReactDOM from "react-dom/client";
import { memo } from "react";
function Heading1(props){
    console.log('Rendering Heading1 component')
    return(
        <>
            <h1 id='Blog'>
                Heading 1 count: {props.count}
            </h1>
        </>
    )
}

export default memo(Heading1);