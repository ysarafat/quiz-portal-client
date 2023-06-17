import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import image from '../../assets/Login-rafiki.svg';
import Container from '../../components/Container';
import useAuth from '../../hooks/useAuth';

function Login() {
    const { loginUser, resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const emailRref = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handelLoginForm = (event) => {
        setError('');
        setLoading(true);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(() => {
                navigate(from, { replace: true });
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500,
                });
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    };
    const handelPassReset = () => {
        const email = emailRref.current.value;
        setError('');
        if (!email) {
            return setError('Please input your email');
        }
        resetPassword(email)
            .then(() => {
                alert('Please chaek your email');
            })
            .catch((err) => {
                setError(err.message);
            });
    };
    return (
        <Container>
            <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center">
                <div className="w-full">
                    <img className="" src={image} alt="" />
                </div>
                <div className="w-full">
                    <div className="bg-slate-100 rounded-lg">
                        <form onSubmit={handelLoginForm} className="space-y-3 p-5">
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
                                    ref={emailRref}
                                    className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    required
                                />
                            </div>

                            <div className="w-full">
                                <label className="text-lg text-textDark">Password</label>
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                    placeholder="Enter Your Password"
                                    name="password"
                                    required
                                />
                            </div>
                            <div className="flex items-center mt-2">
                                <input
                                    onClick={() => setShowPass(!showPass)}
                                    type="checkbox"
                                    name="check"
                                    className="checkbox "
                                />

                                <label className="ml-2  font-medium  dark:text-gray-300">
                                    {showPass ? 'Hide Password' : 'Show Password'}{' '}
                                </label>
                            </div>
                            <input
                                className="h-11 bg-primaryColor hover:bg-hoverColor disabled:bg-slate-300  w-full text-lg text-textDark font-title rounded-lg "
                                disabled={loading}
                                type="submit"
                                value={loading ? 'Please Wait' : 'Login'}
                            />
                        </form>
                        <div className="px-5 pb-5">
                            <button
                                onClick={handelPassReset}
                                className="hover:text-primaryColor underline mb-3 mt-5 dark:text-white"
                            >
                                Forgat Password?
                            </button>
                            <p className="mb-6">
                                Don’t have an account?
                                <Link className="text-primaryColor underline " to="/register">
                                    Create an account
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Login;
