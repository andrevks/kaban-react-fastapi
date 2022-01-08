import React from "react";
import styled from "styled-components";
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Task from "./Task";

const Container = styled.div`
     margin: 8px;
     border: 1px solid black;
     border-radius: 5px;
     width: 200px;
     display: flex;
     flex-direction: column;
     align-items: center;
     padding-bottom: 10px;
     background-color: #50B2C0;
`;

const Title = styled.h3`
    padding: 5px;
`;

const TaskList = styled.div`
    padding: 8px;
`;

function Column(props) {
    return (
        <Draggable draggableId={props.column.id} index={props.index}>
            {provided => (
                <Container {...provided.draggableProps} ref={provided.innerRef}>
                    <Title {...provided.dragHandleProps} >{props.column.title}</Title>
                    <Droppable droppableId={props.column.id} type="task" >
                        {provided => (
                            <TaskList {...provided.droppableProps} ref={provided.innerRef}>
                                {
                                    props.tasks.map((task, index) =>
                                        (<Task key={task.id} task={task} index={task} columnId={props.column.id}/>)
                                    )
                                }
                            {provided.placeholder}
                            </TaskList>
                        )}
                    </Droppable>
                </Container>
            )}
        </Draggable>
    )
}

export default Column;


