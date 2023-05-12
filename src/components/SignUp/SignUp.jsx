import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const SignUp = () => {
    const [error, setError] = useState('');
    const [update, setUpdate] = useState(false);
    const { createUser, updateUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setError('')
        if (password !== confirm) {
            setError('Password not match')
        } else if (password.length < 6) {
            setError('Password at least 6 character')
        }

        createUser(email, password)
            .then(result => {
                setError('')
                const user = result.user;
                event.target.reset();
                updateUser(result.user, name, url)
            })
            .catch(error => {
                setError(error.message)
            })
        updateUser(name, url)
            .then(() => { })
            .catch(error => setError(error.message))
    }

    const handleUpdate = event => {
        setUpdate(event.target.checked)
    }

    return (
        <div className='form-container'>
            <div className='form'>
                <h2>{update ? "Update" : "Sign Up"}</h2>
                <form onSubmit={handleSignUp}>
                    <span className={`${update ? "d-block" : "d-none"}`}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                        <label htmlFor="url">Image url:</label>
                        <input type="text" id="url" name="url" />
                    </span>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm" required />
                    <input type="submit" value={`${update ? "Update" : "Sign Up"}`} />
                    <input
                        onClick={handleUpdate}
                        type="checkbox"
                        className='ms-4'
                    /> <span>Update</span>
                    <br />
                    <small>Already have an Account? <Link to='/login'>Login</Link> </small>
                    <p className='error-text'>{error}</p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;