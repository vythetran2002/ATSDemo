import React from 'react';
import ReactDOM from 'react-dom/client';
import UseFetch from './useFetch/UseFetch';

export default function CustomHookDemo() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const data = UseFetch(url);

    return (
        <>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })
            }
        </>
    )
}