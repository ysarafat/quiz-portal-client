import React, { useState } from 'react';
import Swal from 'sweetalert2';
import image from '../../assets/Login-rafiki.svg';
import Container from '../../components/Container';
import useAuth from '../../hooks/useAuth';

function Login() {
    const { loginUser } = useAuth();
    const [error, setError] = useState('');
    const handelLoginForm = (event) => {
        setError('');
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((err) => setError(err.message));
    };
    return (
        <Container>
            <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center">
                <div className="w-full">
                    <img className="" src={image} alt="" />
                </div>
                <div className="w-full">
                    <form
                        onSubmit={handelLoginForm}
                        className="space-y-3 bg-slate-200 p-5 rounded-lg"
                    >
                        <h1 className="text-3xl font-title font-bold text-center mb-7">
                            Login User
                        </h1>
                        {error && (
                            <p className="text-base font-semibold my-2 text-red-500 text-center">
                                ❌ {error}
                            </p>
                        )}
                        <div className="w-full">
                            <label className="text-lg text-textDark">Email Address</label>
                            <input
                                type="email"
                                className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                placeholder="Enter Your Email"
                                name="email"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <label className="text-lg text-textDark">Password</label>
                            <input
                                type="password"
                                className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                placeholder="Enter Your Password"
                                name="password"
                                required
                            />
                        </div>
                        <input
                            className="h-11 bg-primaryColor hover:bg-hoverColor  w-full text-lg text-textDark font-title rounded-lg "
                            type="submit"
                            value="Login"
                        />
                    </form>
                </div>
            </div>
        </Container>
    );
}

export default Login;
