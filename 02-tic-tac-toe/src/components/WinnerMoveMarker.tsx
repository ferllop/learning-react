import { Board, getWinnerMoveName } from "../models/Board"
import './WinnerMoveMarker.css'

type Props = {
  winnerBoard: Board
}

const WinnerMoveMarker = ({winnerBoard}: Props) => {
  return <div className="winnerMarker">Winner move {getWinnerMoveName(winnerBoard)}</div>
}

export default WinnerMoveMarker
