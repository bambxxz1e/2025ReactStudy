import Hello from "./Hello"
import ProfileCard from "./ProfileCard"
import Counter from "./Counter"
import MirrorInput from "./MirrorInput"
import ToggleBox from "./ToggleBox"

function App(){
  const name = "유우시"

  return(
    <div>
      <Counter />
      <MirrorInput />
      <ToggleBox />
    </div>
  )
}

export default App