import { Stack, Checkbox } from "@mui/material"
import './taskStyle.css'
import FormControlLabel from '@mui/material/FormControlLabel';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Task() {
    return (
        <Stack className="task" display={'flex'} direction={'row'} justifyContent={'space-between'}>
            <FormControlLabel className="task-form" control={<Checkbox defaultChecked />} label={'Hello'} />
            <div className="setting-container">
                <MoreHorizIcon className="more-button" />
                <div className="setting-options">
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
            </div>

        </Stack>
    )
}