import { useState } from "react"

const Counter = ({start, step}) => {
  const [count, setCount] = useState(start)

  const handleInc = () => setCount(count + step)
  const handleDec = () => setCount(count - step)

  return (
    <>
      <span>{count}</span>
      <button onClick={handleDec}>-</button>
      <button onClick={handleInc}>+</button>
    </>
  )
}

export default Counter
