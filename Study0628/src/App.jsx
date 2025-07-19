import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Intro from './components/Intro'
import Post from './components/Post'
import PostList from './components/PostList'
import Timer from './components/Timer'

function App() {
  const [isClick, setClick] = useState(false);

  return (
    <>
      <div style={{display: "flex", gap: "60px", margin: "40px"}}>
        {/* <Intro /> */}

        <Post />
        
        <div style={{width: "400px", paddingTop: "50px"}}>
          <button onClick={() => setClick(!isClick)}>불러오기</button>
          {isClick ? <PostList /> : null}
        </div>

        <Timer />
      </div>
    </>
  )
}

export default App
