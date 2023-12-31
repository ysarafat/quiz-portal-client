import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import image from '../../assets/Login-rafiki.svg';
import Container from '../../components/Container';
import useAuth from '../../hooks/useAuth';

function Register() {
    const { createUser, updateUser } = useAuth();
    const [error, setError] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handelRegisterForm = (e) => {
        setLoading(true);
        setError('');
        e.preventDefault();
        // setError('');
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.files;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, photo, email, password, confirmPassword);
        if (password !== confirmPassword) {
            setLoading(false);
            return setError('Your password did not match');
        }
        // password validation
        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)) {
            return setError('Password must be 6 digits and a letter A-Z with a special character');
        }
        const formData = new FormData();
        formData.append('file', photo[0]);
        formData.append('upload_preset', 'quizPortal');
        formData.append('cloud_name', `${import.meta.env.VITE_CLOUD_NAME}`);
        fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((image) => {
                const user = {
                    name,
                    email,
                    photo: image.url,
                    role: 'user',
                };
                createUser(email, password)
                    .then(() => {
                        updateUser(name, image.url);
                        fetch('https://quiz-portal.onrender.com/user', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(user),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                navigate(from, { replace: true });
                                if (data.insertedId) {
                                    Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: 'Registration Successful',
                                        showConfirmButton: false,
                                        timer: 1500,
                                    });
                                    setLoading(false);
                                }
                            });
                    })
                    .catch((err) => {
                        setError(err.message);
                        setLoading(false);
                    });
            });
    };
    return (
        <Container>
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
                <div className="w-full">
                    <img className="" src={image} alt="" />
                </div>
                <div className="w-full">
                    <form
                        onSubmit={handelRegisterForm}
                        className="space-y-3 bg-slate-100 p-5 rounded-lg"
                    >
                        <h1 className="text-3xl font-title font-bold text-center mb-7">
                            Register User
                        </h1>
                        {error && (
                            <p className="text-base font-semibold my-2 text-red-500 text-center">
                                ❌ {error}
                            </p>
                        )}
                        <div className="w-full">
                            <label className="text-lg text-textDark">Full Name</label>
                            <input
                                type="text"
                                className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                placeholder="Enter Your Full Name"
                                name="name"
                                required
                            />
                        </div>
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
                        <div className="w-full ">
                            <label className="text-lg text-textDark ">Profile Picture</label>
                            <input
                                type="file"
                                className="h-11 w-full border mt-2 border-slate-200 bg-white outline-primaryColor rounded-lg text-textDark file:bg-primaryColor file:border-none file:h-11 file:px-3 "
                                name="photo"
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
                        <div className="w-full ">
                            <label className="text-lg text-textDark">Confirm Password</label>
                            <input
                                type={showPass ? 'text' : 'password'}
                                className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                placeholder="Enter Confirm Password"
                                name="confirmPassword"
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

                            <label className="ml-2  font-medium text-gray-900 dark:text-gray-300">
                                {showPass ? 'Hide Password' : 'Show Password'}{' '}
                            </label>
                        </div>
                        <input
                            className="h-11 bg-primaryColor hover:bg-hoverColor disabled:bg-slate-300 w-full text-lg text-textDark font-title rounded-lg "
                            disabled={loading}
                            type="submit"
                            value={loading ? 'Please Wait' : 'Register'}
                        />
                        <p className="mt-6 dark:text-white">
                            Already have an account?
                            <Link className="text-primaryColor underline ms-2" to="/login">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </Container>
    );
}

export default Register;
