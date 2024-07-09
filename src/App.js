import './App.css';
import { useState } from 'react';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setcurrentPlayer] = useState('X');
  
  const handleCellClick =(index)=>{
    const newBoard = [...board];
    if(newBoard[index] || calculateWinner(newBoard)) return;
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    setcurrentPlayer(currentPlayer==='X'?'O':'X');
  }

  const calculateWinner =(board)=>{
      const wins = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
      ];
      for(let i=0;i<wins.length;i++){
        const [a,b,c] = wins[i];
        if(board[a] && board[a]===board[b] && board[a]===board[c]){
          return board[a];
        }
      }
      if(board.every(cell=>cell!==null)){
        return 'TIE';
      }
      return null;
  };

    const handleReset = () =>{
      setBoard(Array(9).fill(null));
      setcurrentPlayer('X');
    }

  const winner = calculateWinner(board);

  return (
    <div className="App bg-black h-screen w-screen flex flex-col justify-center items-center text-white">
          <h1 className='text-5xl my-8'>TIC-TAC-TOE</h1>
          <p>Current Player : {currentPlayer}</p>
          {winner && winner!='TIE' && (<p className='text-xl my-5'>PLAYER {winner} WON!</p>)}
          {winner && winner=='TIE' && (<p className='text-xl my-5'>MATCH TIED</p>)}
          <div className='grid grid-cols-3 gap-3 my-8'>
            <button className='h-20 w-20 bg-white rounded-full' onClick={()=>{handleCellClick(0)}}>{board[0]}</button>
            <button className='h-20 w-20 bg-white rounded-full' onClick={()=>{handleCellClick(1)}}>{board[1]}</button>
            <button className='h-20 w-20 bg-white rounded-full' onClick={()=>{handleCellClick(2)}}>{board[2]}</button>
            <button className='h-20 w-20 bg-white rounded-full' onClick={()=>{handleCellClick(3)}}>{board[3]}</button>
            <button className='h-20 w-20 bg-white rounded-full' onClick={()=>{handleCellClick(4)}}>{board[4]}</button>
            <button className='h-20 w-20 bg-white rounded-full' onClick={()=>{handleCellClick(5)}}>{board[5]}</button>
            <button className='h-20 w-20 bg-white rounded-full' onClick={()=>{handleCellClick(6)}}>{board[6]}</button>
            <button className='h-20 w-20 bg-white rounded-full' onClick={()=>{handleCellClick(7)}}>{board[7]}</button>
            <button className='h-20 w-20 bg-white rounded-full' onClick={()=>{handleCellClick(8)}}>{board[8]}</button>
          </div>
          <div className='mt-10'>
            <button className='h-10 w-[30vw] bg-red-500 rounded-xl' onClick={handleReset}>RESET</button>
          </div>
    </div>
  );
}

export default App;
