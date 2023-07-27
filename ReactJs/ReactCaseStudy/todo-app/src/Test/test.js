import React, { useState, useEffect, useRef } from 'react';

const task1 = {
    id: 0,
    title: 'HELLO'
}

const task2 = {
    id: 1,
    title: 'BC'
}

export default function Test() {
    const [tasks, setTasks] = useState([task1, task2]);
    const [showTasks, setShowTasks] = useState(true);

    const taskListRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (taskListRef.current && !taskListRef.current.contains(event.target)) {
                setShowTasks(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [taskListRef]);

    return (
        <div ref={taskListRef}>
            <button onClick={() => setShowTasks(!showTasks)}>Toggle Tasks</button>
            {showTasks && (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}