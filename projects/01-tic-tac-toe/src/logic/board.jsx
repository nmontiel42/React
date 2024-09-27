import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&  //First position
        boardToCheck[a] === boardToCheck[b] &&  //Second position
        boardToCheck[a] === boardToCheck[c] //Third position
      ) {
        return boardToCheck[a] //If all 3 match, there is a winner
      }
    }
    //If there is no winner
    return null
  }

export const checkEndGame = (newBoard) => {
    // there is a tie if there's no spaces left on the board

    return newBoard.every((square) => square !== null)
  }