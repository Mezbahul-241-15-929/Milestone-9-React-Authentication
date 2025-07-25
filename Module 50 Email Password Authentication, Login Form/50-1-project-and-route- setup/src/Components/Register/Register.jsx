import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { Link } from 'react-router';



const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(email, password);

        if (!terms) {
            console.log("Terms & Condition not Accepted");
            return;
        }

        // create users
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);

                //email verify:
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        alert("We sent you a verification email")
                    })

                //update user profile
                const profile = {
                    displayName: name,
                    photoUrl: photoUrl,
                };
                


                updateProfile(auth.currentUser, profile)
                    .then(() => {
                        console.log('User profile updated')
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='max-w-sm mx-auto border text-center p-5'>
            <h2 className='text-2xl font-bold mb-4'>Register</h2>
            <form onSubmit={handleRegister} className='space-y-5'>

                {/* Name: */}
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input type="text" name='name' placeholder="Your Name" required />
                </label>
                {/* Photo url: */}
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input type="text" name='photoUrl' placeholder="Photo url" required />
                </label>
                <br />
                {/* Email Field */}
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input type="email" name='email' placeholder="mail@site.com" required />
                </label>
                {/* Password field */}
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                            ></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <div className='relative'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            required
                            placeholder="Password"
                            minLength="8"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        />
                        <button onClick={() => { setShowPassword(!showPassword) }} className='btn btn-xs absolute left-62'>
                            {
                                showPassword ? <FaEye /> : <FaEyeSlash />

                            }
                        </button>
                    </div>
                </label>
                <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                </p>
                <br />
                <label className="label">
                    <input type="checkbox" className="checkbox" name='terms' />
                    Accept Terms and Condition
                </label>
                <br />
                <button className='btn btn-primary'>Sign Up</button>
            </form>

            <p>Already have and Acount? Please <Link className='text-blue-400 underline' to="/login">Login</Link></p>
        </div>
    );
};

export default Register;