import * as React from 'react';
import { Container } from '@mui/material';
import { Stack } from '@mui/material';
import TaskInput from '../Components/TaskInput/TaskInput';
import MyTextField from '../Components/TaskInput/Test';
import AddButton from '../Components/AddButton/AddButton';
import { Link } from '@mui/material';
import ClearAllButton from '../Components/ClearAllButton/ClearAllButton';
import { Divider } from '@mui/material';
import Task from '../Components/Task/Task';

export default function HomePage() {
    return (
        <Container>
            {/* Card */}
            <Stack className='wrapper' position={'relative'}>
                {/* Contains     TaskInput and Button Add */}
                <Stack display={'flex'} direction={'row'} paddingRight={'15px'}>
                    <TaskInput />
                    <AddButton />
                </Stack>
                <Stack className='navigator' display={'flex'} direction={'row'} justifyContent={'space-between'}>
                    <nav>
                        <Link className='mg-r link-item' href='#' underline='none' color={'black'}>All</Link>
                        <Link className='mg-r link-item' href='#' underline='none' color={'black'}>Pending</Link>
                        <Link className='mg-r link-item' href='#' underline='none' color={'black'}>Completed</Link>
                    </nav>
                    <ClearAllButton />
                </Stack>
                <Divider></Divider>
                <Task />
            </Stack>
        </Container>
    );
}
