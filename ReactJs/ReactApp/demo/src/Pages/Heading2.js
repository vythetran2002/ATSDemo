import ReactDOM from "react-dom/client";
import { memo } from "react";
function Heading2(props){
    console.log('Rendering Heading2 component')
    return(
        <>
            <h1 id='Blog'>
                Heading 2 count: {props.count}
            </h1>
        </>
    )
}
export default memo(Heading2);