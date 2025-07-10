import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from 'react';
import { auth } from "../../firebase/firebase.init";

const Login = () => {

    const [user,setUser]= useState(null);

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        console.log('Google sing in clicked');

        signInWithPopup(auth,provider)
        .then(result=>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleSignOut = ()=>{
        signOut(auth).then(()=>{
            console.log("Signout completed");
            setUser(null);
        }).catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
            <h2>Please Login</h2>
            {/* <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            <button onClick={handleSignOut}>SignOut</button> */}

            {
                user ? <button onClick={handleSignOut}>SignOut</button>: 
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
    );
};

export default Login;