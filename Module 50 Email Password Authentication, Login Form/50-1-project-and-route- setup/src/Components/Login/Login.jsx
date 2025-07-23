import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from 'react';
import { auth } from "../../firebase/firebase.init";
import { Link } from "react-router";


const Login = () => {

    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('Google sing in clicked');

        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                setSuccess(true);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("Signout completed");
            setUser(null);
        }).catch(error => {
            console.log(error)
        })
    }




    {/* Login with Email & password: */}

    const [errorMessage,setErrorMessage]=useState('');
    const [success,setSuccess]=useState(false);




    const handleLogin =e =>{
        e.preventDefault();

        const email= e.target.email.value;
        const password= e.target.password.value;

        console.log(email,password);

        //reset 
        setErrorMessage('');
        setSuccess(false);

        //login user
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user);
            setSuccess(true);
        })
        .catch(error =>{
            console.log(error);
            setErrorMessage(error.message)
        })
    }

    return (
        <div className="max-w-sm mx-auto">
            <div className="border p-3">
                <h2>Please Login</h2>
                {/* <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            <button onClick={handleSignOut}>SignOut</button> */}

                {
                    user ? <button onClick={handleSignOut}>SignOut</button> :
                        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
                }
                {
                    user && <div>
                        <h3>{user.displayName}</h3>
                        <h3>{user.email}</h3>
                        <img src={user.photoURL} alt="" />
                    </div>
                }
            </div>




            {/* Login with Email & password: */}

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p>New to this website? Please <Link to='/register' className="text-blue-500 underline">Sign Up</Link></p>
                    {
                        errorMessage && <p className="text-red-500">{errorMessage}</p>
                    }
                    {
                        success && <p className="text-green-500">User logged in successfully</p>
                    }
                </div>
            </div>

        </div>




    );
};

export default Login;