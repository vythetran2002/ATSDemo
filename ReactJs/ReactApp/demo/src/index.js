import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import App from './App';
import UseStateDemo from './UseState';
import UseEffectDemo from './UseEffect';
import UseRefDemo from './UseRef';
import MyForm from './ReactForm';
import ReactRoute from './ReactRoute';
import ReactMemo from './ReactMemo';
import UseContextDemo from './UseContext';
import UseReducerDemo from './UseReducer';
import UseCallBackDemo from './UseCallBack';
import UseMemoDemo from './UseMemo';
import UseFetchDemo from './UseFetch';
import UseFetch from './useFetch/UseFetch';
import testFetch from './useFetch/testFetch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <testFetch />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

