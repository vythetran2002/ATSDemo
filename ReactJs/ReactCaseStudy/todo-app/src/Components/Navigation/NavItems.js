import { ReactDOM } from "react"
import { Link } from "@mui/material"
import './NavStyle.css'

export default function NavItems({ label, isActive, onClick }) {

    const handlingClick = () => {
        let action = label.toLowerCase();
        onClick(action);
    }

    return (
        <>
            {
                isActive ? (
                    <Link className='mg-r link-item' href='#' underline='none' color={'#7a689c'}>{label}</Link>
                ) :
                    <Link className='mg-r link-item' href='#' underline='none' color={'#000000'}
                        onClick={handlingClick}>{label}</Link>
            }
        </>
    )
}