import Counter from "./Counter"

const App = () => {
  return (
    <main>
    <span><Counter start={100} step={3}/></span>
    <span><Counter start={2} step={2}/></span>
    </main>
  )
}

export default App
