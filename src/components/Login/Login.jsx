import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import './Login.css'
import { AuthContext } from '../AuthProviders/AuthProviders';
import { Button } from 'react-bootstrap';

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
                <small>New to Here? Please <Link to='/signup'>Sign Up</Link> </small>
                <h4 className='text-center'>Or</h4>
                
                <div className='text-center d-flex flex-column mt-3'>
                    <Button variant="outline-primary" onClick={handleGoogleSignIn} className='mb-3'>Sign In With Google <FcGoogle></FcGoogle></Button>
                    <Button variant="outline-dark" onClick={handleGithubSignIn} className='mb-3'>Sign In With Github <FaGithub></FaGithub></Button>
                </div>
                
                <p className='error-text'>{error}</p>
            </div>
        </div>
    );
};

export default Login;