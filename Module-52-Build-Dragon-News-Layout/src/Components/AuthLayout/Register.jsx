import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center items-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="font-semibold text-2xl text-center">Register your account</h2>
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" />
                        {/* Email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center py-3 text-sm'>Already have an Account ?
                            <Link to="/auth/login" className='text-secondary'> Login</Link>
                        </p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Register;