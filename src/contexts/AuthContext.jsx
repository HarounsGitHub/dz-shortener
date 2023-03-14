import { createContext, useEffect, useState, useEffect, useCallback } from 'react'

const saveUserToLocalStorage = (user) => {
    window.localStorage.setItem('user', JSON.stringify(user))
}
const readUserFromLocalStorage = () => {
    const usr = JSON.parse(window.localStorage.getItem('user'))

    return usr || null
}
export const AuthContext = createContext({
    user: null,
    login: () => { },
    signup: () => { },
    logout: () => { },
})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    {/* we put null in the state rather then empty because the typeOf null is an object */ }

    useEffect(() => {
        setUser(readUserFromLocalStorage())
    }, [])

    {/* We later wrap login in useCallback to save the function reference*/ }
    const login = useCallback((email, password) => {
        const usr = {
            email,
            password,
            name: 'John',
            lastName: 'Doe',
        }
        setUser(usr)
        saveUserToLocalStorage(usr)
    }, [])
    {/* [] empty dependency array because setUser and saveUserToLocalStorage don't change */ }
    const signup = useCallback((name, lastName, email, password) => {
        const usr = {
            name,
            email,
            lastName,
            password,
        }
        setUser(usr)
        saveUserToLocalStorage(user)
    }, [])

    const logout = useCallback(() => {
        saveUserToLocalStorage(undefined)
        setUser(null)
    }, [])
    return (
        <AuthContext.Provider
            value={
                {
                    user,
                    login,
                    signup,
                    logout,
                }
            }
        >
            {children}
        </AuthContext.Provider>
    )
}
export const AuthConsumer = AuthContext.Consumer