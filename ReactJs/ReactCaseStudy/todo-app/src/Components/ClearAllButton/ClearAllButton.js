import Button from '@mui/material/Button';
import styles from './clearallbuttonStyle.module.css'

export default function ClearAllButton({ onClick }) {

    const handlingClick = () => {
        onClick();
    }

    return (
        <Button className={styles['clear-button']} onClick={handlingClick}>Clear</Button>
    )
}