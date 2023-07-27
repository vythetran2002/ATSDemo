import { InputAdornment, TextField } from "@mui/material"
import './taskInputStyle.css'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

export default function TaskInput({ onChange, locator, onKeyDown }) {

    const handlingKeyDown = (e) => {
        if (e.key === 'Enter') {
            onKeyDown();
        }
    }

    const handlingChange = (e) => {
        onChange(e.target.value);

    }

    return (
        <>
            <TextField className="task-input" placeholder="Add a new task"
                onChange={handlingChange}
                onKeyDown={handlingKeyDown}
                inputRef={locator}
                InputProps={
                    {
                        startAdornment: (
                            <InputAdornment position="start">
                                <CreateOutlinedIcon />
                            </InputAdornment>
                        )
                    }
                }
            />
        </>
    )
}