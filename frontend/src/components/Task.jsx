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
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {provided => (
                <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    {props.task.content}
                </Container>
            )}
        </Draggable>
    )
}


export default Task;