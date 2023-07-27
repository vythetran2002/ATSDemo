import Button from '@mui/material/Button';
import './addButtonStyle.css'

export default function AddButton({ onClick }) {

    const handlingClick = () => {
        onClick()
    }

    return (
        <Button className='add-button'
            onClick={onClick}>Add</Button>
    )
}