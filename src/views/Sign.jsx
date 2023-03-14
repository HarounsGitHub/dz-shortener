import { useNavigate } from 'react-router-dom'
import { ROUTES_NAMES } from '../constants'


//props or deconstructed {toSignup}
const Sign = ({ signup }) => {
    const navigate = useNavigate()
    return (
        <div className="sign">

            <form>
                <div className="container">
                    <h2>Sign</h2>
                    <div className="coord">
                        <input type="text" placeholder="type your first name, please" />
                        <input type="text" placeholder="type your last name, please" />
                    </div>
                    <input type="email" placeholder="type your email address, please" />
                    <input type="password" placeholder="type your password, please" />
                    <button onClick={() => {
                        signup()
                    }}>Sign up</button>
                    <a className="bottom" onClick={() => {
                        {/*hard coded path:   navigate('/login')*/ }
                        navigate(ROUTES_NAMES.login)
                    }} >Already have an account, go to login</a>
                    {/* onClick={() => setModal(true)} */}
                </div>
            </form>


        </div>
    )
}
export default Sign