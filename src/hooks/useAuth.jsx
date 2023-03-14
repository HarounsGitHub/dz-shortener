import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useAuth = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    const login = (email, password) => {
        const usr = {
            name: 'John',
            lastName: 'Doe',
            email,
            password,
        }
        setUser(usr)
        navigate('/profile')
    }
    const signup = (name, lastName, email, password) => {
        setUser({
            name,
            lastName,
            email,
            password,
        })
        navigate('/profile')
    }
    return {
        user,
        login,
        signup,
    }
}

export default useAuth
