import { ReactDOM, useState } from "react";

export default function Test() {

    const [temp, setTemp] = useState('');
    const [value, setValue] = useState('');

    const handlingChange = (e) => {
        if (e.target.checked)
            setValue(e.target.value)
        else
            console.log(e.target.value)
    }

    return (
        <div style={{ display: 'inline-block', border: '2px solid #000000', padding: '0px 100px 100px 100px' }}>
            <label>Enter your course: </label> <br />
            <input type="checkbox" name="HTML" value="HTML" onChange={handlingChange} /> HTML<br />
            <input type="checkbox" name="CSS" value="CSS" onChange={handlingChange} /> CSS<br />
            <input type="checkbox" name="JavaScript" value="JavaScript" onChange={handlingChange} /> JavaScript<br />
            <input type="checkbox" name="ReactJs" value="ReactJs" onChange={handlingChange} /> ReactJs<br />
            <p>Previous input: {value}</p>
        </div>
    )
}