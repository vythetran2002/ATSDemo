import { useState, useMemo } from "react";
import { useRef } from "react";
import ReactDOM from "react-dom/client";

var item = {
    name: 'dien thoai',
    price: '120$'
}

const CalculateTotal = (items) => {
    console.log('rendering CalculateTotal')
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        let price = parseInt(items[i].price);
        total += price;
    }
    return total;
}


export default function UseMemoDemo() {


    const [flag, setFlag] = useState(0);
    const inputLocator = useRef();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [items, setItems] = useState([]);
    // const total = CalculateTotal(items);
    const total = useMemo(
        () => {
            CalculateTotal(items);
        }, [items]
    )


    const HandlingSubmit = (e) => {
        if (name && price) {
            e.preventDefault()
            setItems(
                items => [...items, { name: name, price: price }]
            )
            setName('');
            setPrice('');
            inputLocator.current.focus();
        }
    }


    return (
        <>
            <form onSubmit={HandlingSubmit}>
                <label>Name:</label> <br />

                <input
                    ref={inputLocator}
                    type="text"
                    value={name}
                    placeholder="Enter item's name"
                    onChange={e => { setName(name => name = e.target.value) }}
                ></input> <br />

                <label>Price:</label> <br />

                <input
                    value={price}
                    type="text"
                    placeholder="Enter item's price"
                    onChange={e => { setPrice(price => price = e.target.value) }}
                ></input> <br />

                <button
                    type="submit"
                >Submit</button>
            </form>
            <button onClick={() => { setFlag(flag + 1) }}>NOTHING HAPPEN</button>
            <hr />
            {items.map(
                (item, index) =>
                (
                    <p key={index}>{index}. Item name: {item.name} - Price: {item.price}$</p>
                )
            )}
            <h1>Total: {total}$</h1>

        </>
    )
}
