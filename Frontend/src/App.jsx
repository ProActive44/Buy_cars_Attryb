import { useState } from 'react'
import './App.css'
import Login from './Pages/Login'
import SignUP from './Pages/SignUp'

function App() {
  const [flag, setFlag] = useState(false)

  return (
    <>
      <div className=''>
        <button onClick={()=>setFlag(!flag)}>change</button>
       {
        flag ? <Login setFlag={setFlag}/> : <SignUP setFlag={setFlag}/>
       }
      </div>
    </>
  )
}

export default App
