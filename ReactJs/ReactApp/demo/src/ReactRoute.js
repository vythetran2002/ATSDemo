import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Search from "./Pages/Search";
import Login from "./Pages/Login";
import NoPage from "./Pages/NoPage";

export default function ReactRoute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Layout/>}>
                    <Route index element = {<Home/>}></Route>
                    <Route path='blogs' element= {<Blog/>}></Route>
                    <Route path='login' element= {<Login/>}></Route>
                    <Route path='search' element= {<Search/>}></Route>
                    <Route path='*' element= {<NoPage/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}