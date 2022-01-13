import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Column from "./Column";
import AddColumn from "./AddColumn";
import Logout from "./Logout";
import AppBar from "./AppBar";

const Container = styled.div`
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
        const response = await fetch('/boards', {
            headers: {
                "Authorization": "Bearer " + props.token
            }
        });
        const data = await response.json();
        return data.board;
    }

    useEffect(() => {
        if(board !== initialData){
            saveBoard();
        }
    }, [board]);

    async function saveBoard(){
        const response = await fetch('/boards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + props.token
            },
            body: JSON.stringify(board)
        });
        const data = await response.json();
        // console.log(`BOARD: ${board}`)
        // console.log("board: ", board);
    }


    function onDragEnd(result){
        const { destination, source, draggableId, type } = result;


        if(!destination){
            return;
        }

        if(destination.droppableId === source.droppableId && destination.index === source.index){
            return;
        }


        if (type === 'column'){
            const newColumnOrder = Array.from(board.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);
            setBoard({
                ...board,
                columnOrder: newColumnOrder
            })
            return;
        }

        const start = board.columns[source.droppableId];
        const finish = board.columns[destination.droppableId];

        if (start === finish){
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds
            }

            setBoard({
                ...board,
                columns: {
                    ...board.columns,
                    [newColumn.id]: newColumn
                }
            });
            return;
        }

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index,1);
        const newStartColumn = {
           ...start,
           taskIds: startTaskIds
        }

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);

        const newFinishColumn = {
            ...finish,
            taskIds: finishTaskIds
        }

        setBoard({
            ...board,
            columns: {
                ...board.columns,
                [newStartColumn.id]: newStartColumn,
                [newFinishColumn.id]: newFinishColumn
            }
        });
        return;

    }

    return (

            <div className="bg-gray min-h-screen ">
                <AppBar/>

                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="flex flex-col justify-center items-center">

                        <Droppable style={{ transform: "none" }} droppableId="all-columns" direction="horizontal" type="column">
                            {provided =>(
                                <Container
                                    {...provided.droppableProps} ref={provided.innerRef}>
                                    <div className="flex justify-between max-w-screen-xl items-center min-w-xs gap-8 mt-16 mb-4" >
                                        <p className="font-bold">PROJECT NAME</p>
                                        <AddColumn board={board} setBoard={setBoard}/>
                                    </div>
                                    <div className="flex flex-col gap-8 md:flex-row  max-w-screen-xl overflow-auto md:items-start
                                    flex-1
                                    ">
                                        {
                                            board.columnOrder.map((columnId, index) => {
                                                const column = board.columns[columnId];
                                                const tasks = column.taskIds.map(taskId => board.tasks[taskId]);
                                                return <Column key={column.id} column={column} tasks={tasks} index={index}
                                                        board={board} setBoard={setBoard}/>;
                                            })
                                        }
                                        {provided.placeholder}
                                    </div>
                                </Container>
                            )}
                        </Droppable>
                    </div>
                </DragDropContext>
            </div>
    )
}

export default Board;