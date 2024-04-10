import { SquareId, createSquare } from "./Square"

const s = (id: SquareId) => createSquare(id, null)
export const emptyBoard = [
  s(1), s(2), s(3),
  s(4), s(5), s(6),
  s(7), s(8), s(9),
]
export type Board = typeof emptyBoard

export const isGameFinished = (board: Board) => {
  const same = (board: Board) => (...is: number[]): boolean => {
    const squaresStatus = is.map(i => board[i].status)
    const noneIsEmpty = !squaresStatus.some(status => status === null)
    const areAllEqual = new Set(squaresStatus).size === 1
    return noneIsEmpty && areAllEqual
  }
  
  const boardSame = same(board)
  const isSomeRowCompleted = boardSame(0, 1, 2) || boardSame(3,4,5) || boardSame(6,7,8)
  const isSomeColumnCompleted = boardSame(0,3,6) || boardSame(1,4,7) || boardSame(2,5,8)
  const isSomeDiagonalCompleted = boardSame(0,4,8) || boardSame(2,4,6)
  return isSomeRowCompleted || isSomeColumnCompleted || isSomeDiagonalCompleted
}
