import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Board from "./components/Board";

function App(){
    const initialData = {tasks:{}, columns: {}, columnOrder: []};
    const [board, setBoard] = useState(initialData);

    useEffect(() =>{
        fetchBoard().then(data => setBoard(data))
    }, [])

    async function fetchBoard() {
        const response = await fetch('/board');
        const data = await response.json();
        console.log(data);
        return data.board;
    }

    return (
        <div>
            <Board/>
        </div>
    )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

