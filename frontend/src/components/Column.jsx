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
                    <Container className="flex flex-col bg-inherit "
                        {...provided.draggableProps} ref={provided.innerRef}>

                        <Title className="text-metal font-bold"

                            {...provided.dragHandleProps} >
                            {props.column.title}

                        </Title>

                        <Droppable droppableId={props.column.id}  type="task" >
                            {provided => (
                                <TaskList className="flex-1 w-full bg-metal pt-3 px-1.5 rounded-md md:w-56 font-bold"
                                    {...provided.droppableProps} ref={provided.innerRef}>
                                    {
                                        props.tasks.map((task, index) =>
                                            (<Task key={task.id} task={task} index={index} columnId={props.column.id}
                                            board={props.board} setBoard={props.setBoard}/>)
                                        )
                                    }
                                    {provided.placeholder}

                                    <div className="flex items-center justify-between max-w-full pb-2">
                                        <AddTask columnId={props.column.id} board={props.board} setBoard={props.setBoard}  />
                                        <IconContext.Provider
                                            value={{color:'red', size: '20'}}>

                                            <button className="mb-1"
                                                    onClick={() => deleteColumn(props.column.id, props.index)}>
                                                <AiOutlineDelete className=""/>
                                            </button>

                                        </IconContext.Provider>
                                    </div>

                                </TaskList>
                            )}
                        </Droppable>
                    </Container>
                )}
            </Draggable>
    )
}

export default Column;


