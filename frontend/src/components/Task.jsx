import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { IoIosClose }  from "react-icons/io";
import {IconContext} from "react-icons";

const Container = styled.div`

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
                        <Container className="bg-white mb-5 p-1 rounded-md border"
                                   {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <div>
                                {
                                    props.task.content
                                }
                                <IconContext.Provider
                                    value={{color:'red', size: '15'}}>

                                    <button className="ml-2 m-0 p-0"
                                            onClick={()=> deleteTask(props.columnId, props.index, props.task.id)}>
                                        <IoIosClose/>
                                    </button>

                                </IconContext.Provider>
                            </div>
                        </Container>
                )}
            </Draggable>
    )
}


export default Task;