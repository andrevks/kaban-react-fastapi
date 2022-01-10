import React, { useState } from "react";

function AddColumn(props){
    const [showNewColumnButton, setShowNewColumnButton] = useState(true);
    const [value, setValue] = useState("");
    function handleInputChange(){
        if(value){
            setShowNewColumnButton(true);
            addNewColumn(value)
            setValue('');
            return;
        }
        setShowNewColumnButton(true);
    }

    function addNewColumn(title){
        const newColumnOrder = Array.from(props.board.columnOrder);
        const newColumnId = 'column-' + Math.floor(Math.random() * 10000000);
        newColumnOrder.push(newColumnId);

        const newColumn = {
            id: newColumnId,
            title: title,
            taskIds: []
        }

        const newBoard = {
            ...props.board,
            columns: {
                ...props.board.columns,
                [newColumnId]: newColumn
            },
            columnOrder: newColumnOrder
        }

        props.setBoard(newBoard);
    }
    return (
        <div>
        {

            showNewColumnButton ?
                <button onClick={() => setShowNewColumnButton(false)}>New</button>:
                <input type="text" value={value} onChange={event => setValue(event.target.value)}
                       onBlur={handleInputChange}/>

        }
        </div>
    )

}

export default AddColumn;