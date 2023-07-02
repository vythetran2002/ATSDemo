import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Heading3 from "./Pages/Heading3";
import UseCallbackHeading from "./Pages/useCallbackHeading";
import UseCallbackHeadingCopy from "./Pages/useCallbackHeading-copy";

export default function UseCallBackDemo() {

    const [count01, setCount01] = useState(0);
    const [count02, setCount02] = useState(0);
    const [flag, setFlag] = useState(0);

    const handlingCount01 = () => {
        setCount01(
            count => count += 1
        );
    }
    // const handlingCount01 = useCallback(() => {
    //     setCount01(
    //         count => count += 1
    //     );
    // }, [count01])
    const handlingCount02 = () => {
        setCount02(
            count => count += 1
        );
    }
    // const handlingCount02 = useCallback(() => {
    //     setCount02(
    //         count => count += 1
    //     );
    // }, [count02])

    return (
        <>
            <button onClick={() => { setFlag(flag + 1) }}>NOTHING HAPPEN</button>
            <br />
            <UseCallbackHeading onIncrease={handlingCount01} value={count01} />
            <br />
            <UseCallbackHeadingCopy onIncrease={handlingCount02} value={count02} />
        </>
    )
}