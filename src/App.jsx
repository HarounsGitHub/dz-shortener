import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Sign from './Components/Sign'
import { Route, Routes, Navigate, useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate()

  // the modal {<p> {isLoading ? <span>Login</span> : <span>Signup</span>}}
  const [modal, setModal] = useState(false)
  const handleSubmit = (event) => {
    setModal(!modal)
  }
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/login" />} />
      <Route path='/login' element={
        <Login className="login" />
      } />
      <Route path="/sign" element={<Sign className="sign" />} />


      {/* <div className="App">
        {modal ? (<Login className="login" toLogin={() => setModal(true)} />) :
          (<Sign className="sign" toSignup={() => setModal(false)} />)}
      </div> */}
    </Routes>

  )
}

export default App
