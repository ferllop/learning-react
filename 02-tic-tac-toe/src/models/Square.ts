import { Player } from "../TicTacToe"

export type SquareId = number
export type SquareStatus = Player | null
export type Square = {
  id: number
  status: SquareStatus
}

export const createSquare = (id: number, status: SquareStatus): Square => ({status, id})
export const isEmpty = (s: Square) => s.status === null

