import React from 'react';

const Login = () => {

    const handleGoogleSignIn = () =>{
        console.log('Google sing in clicked');
    }

    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
    );
};

export default Login;