import React, { useState } from "react";

function AddTask(props){
    const [showNewTaskButton, setShowNewTaskButton] = useState(true);
    const [value, setValue] = useState("");
    function handleInputChange(e){
        if (value){
            setShowNewTaskButton(true);
            addNewTask(props.columnId, value)
            setValue('');
            return;
        }
        setShowNewTaskButton(true);
    }

    function addNewTask(columnId, content){
        const newTaskId = 'task-' + Math.floor(Math.random() * 10000000);

        const column = props.board.columns[columnId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.push(newTaskId);

        const newTask = {
            id: newTaskId,
            content: content
        }

        const newBoard = {
            ...props.board,
            tasks: {
                ...props.board.tasks,
                [newTaskId]: newTask
            },
            columns: {
                ...props.board.columns,
                [columnId]: {
                    ...props.board.columns[columnId],
                    taskIds: newTaskIds
                }
            }
        };

        props.setBoard(newBoard);

    }
    return (
        <div>
        {
            showNewTaskButton ?
                <button onClick={() => setShowNewTaskButton(false)}>New</button>:
                <input type="text" value={value} onChange={event => setValue(event.target.value)}
                 onBlur={handleInputChange}/>
        }
        </div>
    )
}


export default AddTask;