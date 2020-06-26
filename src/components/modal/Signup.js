import React from 'react';
import './Modal.css';

const SignIn = ({ showLoginSignIn }) => {

    return (
        <>
            <form action='#' method='POST'>
                <h2>Sign up </h2>
                <label> Name:</label>
                <input type='text' name='name' placeholder='Enter your name'/>

                <label> Email:</label>
                <input type='text' name='name' placeholder='your-email@example.com'/>
                
                <label> Password:</label>
                <input type='password' name='password' />
                <button>Sign up</button>
                <p>If you already have an account, please <strong onClick={() => showLoginSignIn()}>login</strong></p>
            </form>
        </>
    )
}

export default SignIn