import { useState, useRef, useEffect } from 'react';
import { Container } from '@mui/material';
import { Stack } from '@mui/material';
import TaskInput from '../Components/TaskInput/TaskInput';
import AddButton from '../Components/AddButton/AddButton';
import { Link } from '@mui/material';
import ClearAllButton from '../Components/ClearAllButton/ClearAllButton';
import { Divider } from '@mui/material';
import Task from '../Components/Task/Task';
import NavItems from '../Components/Navigation/NavItems';
import { Typography } from '@mui/material';


export default function HomePage() {
    // Task content 
    const [taskName, setTaskName] = useState('');
    // All items
    const [items, setItems] = useState([]);

    // locator for task input
    const locator = useRef(null);
    // state for All navigation active
    const [allActive, setAllActive] = useState(true);
    // state for Pending navigation active
    const [pendingActive, setPendingActive] = useState(false);
    // state for Completed navigation active
    const [completedActive, setCompletedActive] = useState(false);

    useEffect(
        () => {
            locator.current.value = '';
            locator.current.focus();
        }, [items]
    )

    const handlingChangeTaskName = (value) => {
        setTaskName(value);
    }

    const handlingAddButton = () => {
        if (locator.current.value !== '') {

            //get new item ID
            let id = items.length;
            //get content
            let content = taskName;
            // get isDone
            let isDone = false;
            // set object
            let task = {
                id: id,
                content: content,
                isDone: isDone
            }


            let newItems = items.slice();
            newItems.push(task);
            setItems(newItems);
            setTaskName('');
        }

    }
    const handlingClearAllButton = () => {
        setItems([]);
        setTaskName('');
    }
    const handlingNavigation = (action) => {
        switch (action) {
            case 'all': {
                setAllActive(true);
                setCompletedActive(false);
                setPendingActive(false);
                break;
            }
            case 'pending': {
                setAllActive(false);
                setCompletedActive(false);
                setPendingActive(true);
                break;
            }
            case 'completed': {
                setAllActive(false);
                setCompletedActive(true);
                setPendingActive(false);
                break;
            }
            default:
                return 0;
        }
    }


    return (
        <Container >
            {/* Card */}
            <Stack className='wrapper' position={'relative'}>
                {/* Contains TaskInput and Button Add */}
                <Stack display={'flex'} direction={'row'} paddingRight={'15px'}>
                    <TaskInput onChange={handlingChangeTaskName} locator={locator} onKeyDown={handlingAddButton} />
                    <AddButton onClick={handlingAddButton} />
                </Stack>
                {/* Contains Categories and Clear button */}
                <Stack className='navigator' display={'flex'} direction={'row'} justifyContent={'space-between'}>
                    <nav>
                        <NavItems label={'All'} isActive={allActive} onClick={handlingNavigation} />
                        <NavItems label={'Pending'} isActive={pendingActive} onClick={handlingNavigation} />
                        <NavItems label={'Completed'} isActive={completedActive} onClick={handlingNavigation} />
                    </nav>
                    <ClearAllButton onClick={handlingClearAllButton} />
                </Stack>
                <Divider></Divider>
                {/* TASKs */}
                {
                    (items.length > 0) ? (
                        items.map((item, index) => (
                            <div key={'div' + index}>
                                <li >
                                    <Task key={item.id} className='task' label={item.content} />
                                </li>
                                <Divider />
                            </div>
                        ))
                    ) : (
                        <Typography className='reminder-task'>You don't have any task</Typography>
                    )
                }
            </Stack>
        </Container>
    );
}
