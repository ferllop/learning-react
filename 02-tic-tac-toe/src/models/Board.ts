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
  return getWinnerCoords(board) !== null
}

type Predicate<T> = (...x: T[]) => boolean
const winnerRows = [[0,1,2], [3,4,5], [6,7,8]]
const winnerColumns = [[0,3,6], [1,4,7], [2,5,8]]
const winnerDiagonal = [[0,4,8], [2,4,6]]
export const getWinnerCoords = (board: Board) => {
  const getWinnerMove = 
    <T>(predicate: Predicate<T>) => 
    (winnerPlays: T[][]) => 
    winnerPlays.reduce<T[]|null>((accum, squares) => predicate(...squares) ? squares : accum, null)

  const squaresHaveSamePlayer = (board: Board) => (...arrayIndexes: number[]): boolean => {
    if (arrayIndexes.some(i => i-1 > board.length)) {
      throw new Error('Indexes must be into board\'s bounds')
    }
    const squares = arrayIndexes.map(i => board[i])
    const noneIsEmpty = !squares.some(player => Square.isEmpty(player))
    const areAllEqual = new Set(squares.map(sq => sq.player)).size === 1
    return noneIsEmpty && areAllEqual
  }

  return getWinnerMove(squaresHaveSamePlayer(board))([
    ...winnerRows,...winnerColumns, ...winnerDiagonal
  ])
}

export const getWinnerMoveName = (winnerBoard: Board) => {
  const names: Record<string, string> = {
    '012': 'row1',
    '345': 'row2',
    '678': 'row3',
    '036': 'column1',
    '147': 'column2',
    '258': 'column3',
    '048': 'forwardDiagonal',
    '246': 'backdiagonal',
  }
  const winnerCoords = getWinnerCoords(winnerBoard)
  return winnerCoords !== null ? names[winnerCoords.join('')] : 'nowinner'
}


