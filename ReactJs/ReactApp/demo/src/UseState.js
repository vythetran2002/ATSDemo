import { useState } from "react";
import ReactDOM from "react-dom/client";

// update state
// export default function UseStateDemo(){
//     const [name, setName] = useState("ATS");

//     return (
//       <>
//         <h1>Hello {name}</h1>
//         <button
//           type="button"
//           onClick={() => setName("ATS1")}
//         >Change</button>
//      </>
//     )
// }

// update Object or Arrays in State
export default function UseStateDemo(){
    const [phone, setPhone] = useState(
        {
            brand: 'apple',         
            color: 'black',
            buyDate: 'Oct 25 2002',
            model: 'iphone 4',
            price: '150$'
        }
    );

    const updateModel = (model,price) =>{
        setPhone(phone => {
            return {
                ...phone, model:model, price:price
            }
        });
    };

    return(
        <>
            <h1>I have an {phone.model} - values {phone.price}</h1>
            <button type="button" onClick={() => updateModel('iphone 5','200$')}>
                Upgrade
            </button>
        </>
    )
}