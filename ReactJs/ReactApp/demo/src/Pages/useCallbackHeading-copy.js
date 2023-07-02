import { ReactDOM, memo } from "react";

function UseCallbackHeadingCopy(props) {

    console.log('rendering the second components')

    return (
        <div style={{ border: "2px solid #000000", width: '20%', }}>
            <button onClick={props.onIncrease}>RUN</button>
            <p>{props.value}</p>
        </div>
    )
}
export default memo(UseCallbackHeadingCopy);