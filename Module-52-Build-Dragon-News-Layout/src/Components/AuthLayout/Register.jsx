import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const {createUser,setUser } = use(AuthContext);
    const handleRegister=(e)=>{
        e.preventDefault();
        const form =e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photourl=form.photourl.value;
        console.log({name,email,password,photourl})
        createUser(email,password).then((result)=>{
            const user=result.user;
            //console.log(user);
            setUser(user);
        }).catch((error)=>{
            //const errorCode =error.code;
            const errorMessage= error.Message;
            alert(errorMessage);
        })
    }
    return (
        <div className='flex justify-center items-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
                    <h2 className="font-semibold text-2xl text-center">Register your account</h2>
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" required/>
                        {/* Photo url */}
                        <label className="label">Photo url</label>
                        <input name='photourl' type="text" className="input" placeholder="Photo url" required/>
                        {/* Email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required/>
                        {/* Password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required/>

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center py-3 text-sm'>Already have an Account ?
                            <Link to="/auth/login" className='text-secondary'> Login</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;