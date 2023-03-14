import { useState } from 'react'
import './App.css'
import LoginConponet from './views/Login'
import Sign from './views/Sign'
import Profile from './views/Profile'
import { Route, Routes, Navigate, useNavigate } from "react-router-dom"
import { ROUTES_NAMES } from './constants'


function App() {
  const navigate = useNavigate()

  // the modal {<p> {isLoading ? <span>Login</span> : <span>Signup</span>}}
  const [modal, setModal] = useState(false)
  const handleSubmit = (event) => {
    setModal(!modal)
  }
  return (
    <Routes>
      <Route path={ROUTES_NAMES.home} element={<Navigate to={ROUTES_NAMES.login} />} />
      {/*before the use of constants.js we used hard coded paths */}
      {/* <Route path='/login' element={
        <LoginConponet className="login" />
      } /> */}
      <Route path={ROUTES_NAMES.login} element={
        <LoginConponet className="login" />
      } />
      <Route path={ROUTES_NAMES.signup} element={<Sign className="sign" />} />
      <Route path="/profile" element={<Profile />} />


      {/* <div className="App">
        {modal ? (<Login className="login" toLogin={() => setModal(true)} />) :
          (<Sign className="sign" toSignup={() => setModal(false)} />)}
      </div> */}
    </Routes>

  )
}

export default App
