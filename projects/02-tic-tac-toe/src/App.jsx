import { useState } from "react"

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className= `square ${isSelected ? `is-selected` : ''}`
  

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3 ,6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&  //Primera posicion
        boardToCheck[a] === boardToCheck[b] &&  //Segunda posicion
        boardToCheck[a] === boardToCheck[c] //Tercer aposicion
      ) {
        return boardToCheck[a] //Si las 3 coinciden, hay ganador
      }
    }
    //si no hay ganador
    return null
  }

  const updateBoard = (index) => {
    //Si hay contenido o ganador, no actualiza
    if (board[index] || winner ) return

    //Copia el board
    const newBoard = [... board]

    //Actualiza board (la copia)
    newBoard[index] = turn
    setBoard(newBoard)

    //Cambia el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //Comprueba si hay ganador
    const newwinner = checkWinner(newBoard)
    if (newwinner) {
      setWinner(newwinner)
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
      {
        board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          )
        })
      }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  )
}

export default App
