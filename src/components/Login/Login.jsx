import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { AuthContext } from '../AuthProviders/AuthProviders';

const Login = () => {
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);

    const { logInUserEmailPassword, signInGoogle, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        logInUserEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className='form-container'>
            <div className='form'>
                <h2>Login</h2>
                <form onSubmit={handleSignIn}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Password:</label>
                    <input type={show ? "text" : "password"} id="password" name="password" required />
                    <p onClick={() => setShow(!show)}>
                        {
                            show ? <span>Hide</span> : <span>Show</span>
                        }
                    </p>
                    <input className='w-100' type="submit" value="Login" />
                </form>
                <small>If you no account <Link to='/signup'>Sign Up</Link> </small>
                <h5 className='text-center my-3 text-info'>=-=-=-=-= or =-=-=-=-=</h5>
                <div className='text-center'>
                    <button className='me-3' onClick={handleGoogleSignIn}>Google Sign In</button>
                    <button onClick={handleGithubSignIn}>Github Sign In</button>
                </div>
                <p className='error-text'>{error}</p>
            </div>
        </div>
    );
};

export default Login;