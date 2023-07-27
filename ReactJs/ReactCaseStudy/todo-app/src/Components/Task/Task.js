import { Stack, Checkbox } from "@mui/material";
import './taskStyle.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRef, useState, useEffect } from "react";

export default function Task(props) {
    const locator = useRef(null);
    const [isOptionsVisible, setOptionsVisible] = useState(false);

    const handlingOptionClick = () => {
        setOptionsVisible(true);
    };

    const handleOutsideClick = (event) => {
        if (locator.current && !locator.current.contains(event.target)) {
            setOptionsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <Stack className="task" display={'flex'} direction={'row'} justifyContent={'space-between'}>
            <FormControlLabel className="task-form" control={<Checkbox />} label={props.label} />
            <div className="setting-container">
                <MoreHorizIcon className="more-button" onClick={handlingOptionClick} />
                {isOptionsVisible && (
                    <div className={'setting-options'} ref={locator}>
                        <ul>
                            <li>
                                <EditIcon />
                                <span>Edit</span>
                            </li>
                            <li>
                                <DeleteIcon />
                                <span>Delete</span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </Stack>
    )
}
