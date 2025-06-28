import Hello from "../components/Hello"
import Counter from "../components/Counter"
import { useState } from "react"
import Like from "../components/Like"

function User(props) {
  return <p>{props.name}님 환영해요!</p>
}

function Button({ label, color }) {
  return <button style={{ backgroundColor: color }}>{label}</button>
}

function Test0621() {
  const [isLogin, setIsLogin] = useState(false);
  
  return (
    <>
      <div>
        <h1>로그인 예제</h1>
        <Counter/>
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "로그아웃" : "로그인"}
        </button>
        <Hello isLogin={isLogin} />
        <Hello isLogin={isLogin} />
        <User name="유우시" />
        <User name="리쿠" />
        <User name="사쿠야" />
        <Button label="확인" color="green" />
        <Button label="취소" color="red" />
        <Like />
      </div>
    </>
  )
}

export default Test0621
