import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './components/TodoInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoInput />
    </>
  )
}

export default App
