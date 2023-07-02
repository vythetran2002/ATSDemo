import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import UseFetch from "./useFetch/UseFetch";


// export default function Test0(){
//     const [data,setData] = useState(null);

//     useEffect(() => {
//         console.log('a');
//         fetch("https://jsonplaceholder.typicode.com/todos")
//           .then((res) => res.json())
//           .then((data) => setData(data));       
//       },[]);

//     return(
//         <>
//             {
//                 (data!=null) && data.map(
//                     (item,index) => {
//                             return(
//                                     <p key={index}>Title: {item.title} - ID: {item.id}</p>
//                           )
//                     }
//                 )
//             }
//         </>
//     );
// }

export default function UseFetchDemo() {
    const [data] = UseFetch("https://jsonplaceholder.typicode.com/todos");
    console.log('test' + data);

    return (
        <>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })}
        </>
    );
};