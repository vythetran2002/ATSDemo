import { InputAdornment, TextField } from "@mui/material"
import './taskInputStyle.css'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

export default function TaskInput() {
    return (
        <>
            <TextField className="task-input" placeholder="Add a new task"
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