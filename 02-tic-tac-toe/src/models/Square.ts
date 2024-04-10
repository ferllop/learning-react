export type Id = number
export type Player = string | null
export type Square = {
  id: Id
  player: Player
}

export const create = (id: number, player: Player): Square => ({player, id})
export const isEmpty = (s: Square) => s.player === null

