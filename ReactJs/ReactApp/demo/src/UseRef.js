import { render } from "@testing-library/react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import UseRefPage from "./Pages/RefPage";

// Does Not Cause Re-renders

// export default function UseRefDemo() {
//     const [count1, setCount1] = useState(0);
//     const [count2, setCount2] = useState(0);
//     const countAll = useRef(0);
//     useEffect(
//         () => {
//             countAll.current = countAll.current + 1;
//         }, [count1, count2]
//     )

//     return (
//         <>
//             <p>You have clicked this button {count1} time(s)</p>
//             <button onClick={() => setCount1((c) => c + 1)}>Button1</button> <br></br>
//             <p>You have clicked this button {count2} time(s)</p>
//             <button onClick={() => setCount2((c) => c + 1)}>Button1</button> <br></br>
//             <h1>You have clicked {countAll.current} time(s)</h1>
//             <br></br>
//         </>
//     )
// }

// Accessing DOM Elements
export default function UseRefDemo() {


    const inputElement = useRef();


    const handlingSubmit = (e) => {
        inputElement.current.value = ''
        inputElement.current.focus();
    }

    return (
        <div style={{ margin: 25 }}>

            <label>Enter your name:</label>
            <br></br>
            <UseRefPage locator={inputElement} />
            <input
                type="text"
                placeholder="enter your name" />
            <br></br>
            <label>Enter your age:</label>
            <br></br>
            {/* <input
                type="text"
                placeholder="enter your age" ref={inputElement} /> */}

            <br></br>

            <input type="submit" value='SUBMIT' onClick={handlingSubmit}></input>

        </div >
    )

}


// Tracking State Changes

// function removeItemFromArray(array, item) {
//     const index = array.indexOf(item);
//     if (index > -1) {
//         array.splice(index, 1);
//     }
//     return array;
// }

// const TextFieldItem = ({ onChange, refValue }) => {
//     const handlingChange = (e) => {
//         onChange(e.target.value);
//     };

//     return (
//         <div
//             style={{
//                 display: "inline-block",
//                 border: "2px solid #000000",
//                 padding: "0px 100px 100px 100px",
//             }}
//         >
//             <label>Enter your name: </label> <br />
//             <input
//                 type="text"
//                 placeholder="enter your name"
//                 onChange={handlingChange}
//             ></input>
//             <p>Previous input: {refValue}</p>
//         </div>
//     );
// };
// const NumberFieldItem = ({ refValue, onChange }) => {
//     const handlingChange = (e) => {
//         onChange(e.target.value);
//     };

//     return (
//         <div
//             style={{
//                 display: "inline-block",
//                 border: "2px solid #000000",
//                 padding: "0px 100px 100px 100px",
//             }}
//         >
//             <label>Enter your age: </label> <br />
//             <input type="number" onChange={handlingChange}></input>
//             <p>Previous input: {refValue}</p>
//         </div>
//     );
// };
// const SelectFieldItem = ({ refValue, onChange }) => {

//     console.log('ref: ' + (refValue));

//     const HandlingChange = (e) => {
//         if (e.target.checked) {
//             console.log(e.target.checked);
//             console.log(e.target.value);
//             onChange(e.target.value, true);
//         } else {
//             onChange(e.target.value, false);
//         }
//     };

//     return (
//         <div
//             style={{
//                 display: "inline-block",
//                 border: "2px solid #000000",
//                 padding: "0px 100px 100px 100px",
//             }}
//         >
//             <label>Enter your course: </label> <br />
//             <input
//                 type="checkbox"
//                 name="HTML"
//                 value="HTML"
//                 onChange={HandlingChange}
//             />{" "}
//             HTML
//             <br />
//             <input
//                 type="checkbox"
//                 name="CSS"
//                 value="CSS"
//                 onChange={HandlingChange}
//             />{" "}
//             CSS
//             <br />
//             <input
//                 type="checkbox"
//                 name="JavaScript"
//                 value="JavaScript"
//                 onChange={HandlingChange}
//             />{" "}
//             JavaScript
//             <br />
//             <input
//                 type="checkbox"
//                 name="ReactJs"
//                 value="ReactJs"
//                 onChange={HandlingChange}
//             />{" "}
//             ReactJs
//             <br />
//             <p>Previous input: </p>
//             <ol>
//                 {
//                     (refValue) && refValue.map(
//                         (course, index) => {
//                             return (
//                                 <li key={index}>
//                                     {course}
//                                 </li>
//                             )
//                         }
//                     )
//                 }
//             </ol>
//         </div>
//     );
// };
// // Tracking State Changes
// export default function UseRefDemo() {
//     const [courses, setCourses] = useState([]);

//     const [student, setStudent] = useState({});

//     console.log(student);

//     const nameRef = useRef(null);
//     const ageRef = useRef(null);
//     const courseRef = useRef([]);

//     const handlingNameChange = (value) => {
//         setStudent({ ...student, name: value });
//     };

//     const handlingAgeChange = (value) => {
//         setStudent({ ...student, age: value });
//     };

//     const handlingCourseChange = (value, isPush) => {
//         if (isPush) {
//             courses.push(value);
//             setCourses(courses);
//             setStudent({ ...student, courses: courses });
//         } else {
//             var temp = removeItemFromArray(courses, value);
//             setStudent({ ...student, courses: temp });
//         }
//     };

//     useEffect(() => {
//         nameRef.current = student.name;
//         ageRef.current = student.age;
//         var temp = student.courses;
//         if (temp) {
//             courseRef.current = [...temp]
//         }

//     }, [student]);

//     return (
//         <>
//             <div
//                 style={{
//                     display: "flex",
//                     justifyContent: "space-around",
//                     marginTop: "7px",
//                 }}
//             >
//                 <TextFieldItem
//                     refValue={nameRef.current}
//                     onChange={handlingNameChange}
//                 />
//                 <NumberFieldItem
//                     refValue={ageRef.current}
//                     onChange={handlingAgeChange}
//                 />
//                 <SelectFieldItem
//                     refValue={courseRef.current}
//                     onChange={handlingCourseChange}
//                 />
//             </div>
//             <hr />
//             <div style={{ fontSize: "39px" }}>
//                 <ul>
//                     <li>Name: {student.name}</li>
//                     <li>Age: {student.age}</li>
//                     <li>Courses attended: </li>
//                     <ol>
//                         {
//                             (student.courses) &&
//                             student.courses.map(
//                                 (course, index) => {
//                                     return (
//                                         <li key={index}>
//                                             {course}
//                                         </li>
//                                     )
//                                 }
//                             )
//                         }
//                     </ol>
//                 </ul>
//             </div>
//         </>
//     );
// }
