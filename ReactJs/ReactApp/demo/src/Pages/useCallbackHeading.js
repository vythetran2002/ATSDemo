import { ReactDOM } from "react";
import { memo } from "react";

function UseCallbackHeading(props) {

    console.log('rendering the first components')

    return (
        <div style={{ border: "2px solid #000000", width: '20%', }}>
            <button onClick={props.onIncrease}>RUN</button>
            <p>{props.value}</p>
        </div>
    )
}
export default memo(UseCallbackHeading)