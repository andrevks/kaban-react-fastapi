import React from "react";
import styled from "styled-components";
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Task from "./Task";
import AddTask from "./AddTask";
import {IconContext} from "react-icons";
import {AiOutlineDelete} from "react-icons/ai";

const Container = styled.div`
`;

const Title = styled.h3`
    padding: 5px;
`;

const TaskList = styled.div`
`;

function Column(props) {

    function deleteColumn(columnId, index){
        const columnTasks = props.board.columns[columnId].taskIds;

        const finalTasks = columnTasks.reduce((previousValue, currentValue) => {
            const { [currentValue]: oldTask, ...newTasks} = previousValue;
            return newTasks;
        }, props.board.tasks);

        const columns = props.board.columns;
        const { [columnId]: oldColumn, ...newColumns } = columns;

        const newColumnOrder = Array.from(props.board.columnOrder);
        newColumnOrder.splice(index, 1);

        const newBoard = {
            tasks: finalTasks,
            columns: newColumns,
            columnOrder: newColumnOrder
        };
        props.setBoard(newBoard);
    }

    return (

            <Draggable draggableId={props.column.id} index={props.index}>
                {provided => (
                    <Container className="bg-inherit p-5"
                        {...provided.draggableProps} ref={provided.innerRef}>
                        <Title className="text-metal font-bold"
                            {...provided.dragHandleProps} >
                            {props.column.title}

                            <IconContext.Provider
                                value={{color:'red', size: '15'}}>
                                <button className="ml-2 m-0 p-0 bg-inherit "
                                        onClick={() => deleteColumn(props.column.id, props.index)}>
                                    <AiOutlineDelete className="ml-5 "/>
                                </button>

                            </IconContext.Provider>
                        </Title>

                        <Droppable droppableId={props.column.id}  type="task" >
                            {provided => (
                                <TaskList className="bg-metal pt-3 px-1.5 rounded-md"
                                    {...provided.droppableProps} ref={provided.innerRef}>
                                    {
                                        props.tasks.map((task, index) =>
                                            (<Task key={task.id} task={task} index={index} columnId={props.column.id}
                                            board={props.board} setBoard={props.setBoard}/>)
                                        )
                                    }
                                    {provided.placeholder}
                                    <AddTask columnId={props.column.id} board={props.board} setBoard={props.setBoard}  />
                                </TaskList>
                            )}
                        </Droppable>
                    </Container>
                )}
            </Draggable>
    )
}

export default Column;


