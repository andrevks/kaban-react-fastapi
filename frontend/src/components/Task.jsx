import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: #FEEFDD;
`;

function Task(props) {

    function deleteTask(columnId, index, taskId){
        const column = props.board.columns[columnId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(index, 1);

        const tasks = props.board.tasks;
        const { [taskId]:oldTask, ...newTasks } = tasks;

        const newBoard = {
            ...props.board,
            tasks: {
                ...newTasks
            },
            columns: {
                ...props.board.columns,
                [columnId]:{
                    ...column,
                    taskIds: newTaskIds
                }
            }
        };

        props.setBoard(newBoard);

    }

    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {provided => (
                <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    {props.task.content}
                    <span onClick={()=> deleteTask(props.columnId, props.index, props.task.id)}>  (x)</span>
                </Container>
            )}
        </Draggable>
    )
}


export default Task;