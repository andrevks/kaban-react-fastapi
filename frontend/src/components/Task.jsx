import React from "react";
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
        <Container>
            {props.task.content}
        </Container>
    )
}


export default Task;