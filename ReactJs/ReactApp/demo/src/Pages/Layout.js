import { Outlet, Link } from "react-router-dom";
import '../css/RouteDemo.css'

export default function Layout(){
    return(
        <>
        <nav>
        <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/login">Login</Link></li>        
        </ul>
        </nav>

        <Outlet />

        </>
    )
}