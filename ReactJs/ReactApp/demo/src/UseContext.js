import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

var myPhone = {
    brand: "Apple",
    model: "IPhone 6",
    price: "12$",
    buyDate: "Oct 25 2002"
}

export const PhoneContext = createContext();

export default function UseContextDemo(){

    const [phone, setPhone] = useState(myPhone);

    return(
        <PhoneContext.Provider value={phone}>
            <h1>Brand: {phone.brand}</h1>
            <FirstChild/>
        </PhoneContext.Provider>
    )
}

function FirstChild(){
    const phone = useContext(PhoneContext);
    return(
        <>
            <h1>Model: {phone.model}</h1>
            <SecondChild/>
        </>
    )
}
function SecondChild(){
    return(
        <>
            <h1>Price: </h1>
            <ThirdChild/>
        </>
    )
}
function ThirdChild(){
    const phone = useContext(PhoneContext);
    return(
        <>
            <h1>Buy date: {phone.buyDate}</h1>  
        </>
    )
}