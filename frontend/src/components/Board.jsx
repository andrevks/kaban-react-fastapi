import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Column from "./Column";

const Container = styled.div`
    display: flex;
`;

function Board(props) {
    const initialData = {tasks:{}, columns: {}, columnOrder: []};
    const [board, setBoard] = useState(initialData);

    useEffect(() =>{
        fetchBoard().then(data => {
            setBoard(data);
        });
    }, []);

    async function fetchBoard() {
        const response = await fetch('/board');
        const data = await response.json();
        return data.board;
    }

    function onDragEnd(){
        alert('dropped');
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="all-columns" direction="horizontal" type="column">
                {provided =>(
                    <Container {...provided.droppableProps} ref={provided.innerRef}>
                        {
                            board.columnOrder.map((columnId, index) => {
                                const column = board.columns[columnId];
                                const tasks = column.tasksId.map(taskId => board.tasks[taskId]);
                                return <Column key={column.id} column={column} tasks={tasks} index={index}/>;
                            })
                        }
                    {provided.placeholder}
                    </Container>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default Board;