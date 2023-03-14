import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { ROUTES_NAMES } from "../constants"

const Login = (toLogin, toSignup) => {
    const navigate = useNavigate()
    return (
        <div className="login">
            <form>
                <div className="container">
                    <h2>Login</h2>
                    <input type={"email"} placeholder="type your email address, please"></input>
                    <input type={"password"} placeholder="type your password, please"></input>
                    <button type={'button'} onClick={() => {
                        toLogin()
                    }}>Login</button>
                    <Link className="bottom" to={ROUTES_NAMES.signup} type={'button'} >
                        You don't have an account?, Signup right now!</Link>
                </div>
            </form >
        </div >
    )
}
export default Login