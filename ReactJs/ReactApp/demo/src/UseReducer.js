import { useReducer, useState } from "react";
import ReactDOM from "react-dom/client";

const reducer = (state, action) => {
    switch (action) {
        case 'up':
            return state + 1
        case 'down':
            return state - 1
        default:
            return 0
    }
}

export default function UseReducerDemo() {

    // const [count, dispatch] = useReducer(reducer, 0);
    const [count, setCount] = useState(0);

    const handlingClick = (action) => {
        switch (action) {
            case 'up':
                {
                    setCount(c => { return c + 1 });
                    break;
                }

            case 'down':
                {
                    setCount(c => { return c - 1 });
                    break;
                }
            default:
                return 0
        }
    }

    return (
        // <>
        //     <h1>{count}</h1>

        //     <button type="button" onClick={() => dispatch('up')}>up</button>
        //     <button type="button" onClick={() => dispatch('down')}>down</button>

        // </>
        <>
            <h1>{count}</h1>
            <button type="button" key={'1'} onClick={() => handlingClick('up')}>up</button>
            <button type="button" key={'2'} onClick={() => handlingClick('down')}>down</button>

        </>
    )

}

