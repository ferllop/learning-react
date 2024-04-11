import * as Square from "./Square"

const s = (id: Square.Id) => Square.create(id, null)
export const emptyBoard = [
  s(1), s(2), s(3),
  s(4), s(5), s(6),
  s(7), s(8), s(9),
]
export type Board = typeof emptyBoard

export const isSquareEmpty = (board: Board, squareId: Square.Id) => 
  !board.find(s => s.id === squareId)?.player

export const canPlayInSquare = (board: Board, id: Square.Id) => !hasWinner(board) && isSquareEmpty(board, id)

export const updateBoard = (board: Board, id: Square.Id, player: Square.Player): Board => 
  board.map(square => square.id === id ? {...square, player} : square)

export const hasWinner = (board: Board) => {
  const squaresHaveSamePlayer = (board: Board) => (...arrayIndexes: number[]): boolean => {
    const squares = arrayIndexes.map(i => board[i])
    const noneIsEmpty = !squares.some(player => Square.isEmpty(player))
    const areAllEqual = new Set(squares.map(sq => sq.player)).size === 1
    return noneIsEmpty && areAllEqual
  }
  const b = squaresHaveSamePlayer(board)
  const isSomeRowCompleted = b(0, 1, 2) || b(3,4,5) || b(6,7,8)
  const isSomeColumnCompleted = b(0,3,6) || b(1,4,7) || b(2,5,8)
  const isSomeDiagonalCompleted = b(0,4,8) || b(2,4,6)
  return isSomeRowCompleted || isSomeColumnCompleted || isSomeDiagonalCompleted
}
