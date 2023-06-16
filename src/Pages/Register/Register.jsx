import React, { useState } from 'react';
import Swal from 'sweetalert2';
import image from '../../assets/Login-rafiki.svg';
import Container from '../../components/Container';
import useAuth from '../../hooks/useAuth';

function Register() {
    const { createUser, updateUser, user } = useAuth();
    console.log(user);
    const [error, setError] = useState('');
    const handelRegisterForm = (e) => {
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
                        fetch('http://localhost:5000/user', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(user),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data);
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: 'Registration Successful',
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                            });
                    })
                    .catch((err) => setError(err.message));
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
                        className="space-y-3 bg-slate-200 p-5 rounded-lg"
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
                                type="password"
                                className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                placeholder="Enter Your Password"
                                name="password"
                                required
                            />
                        </div>
                        <div className="w-full ">
                            <label className="text-lg text-textDark">Confirm Password</label>
                            <input
                                type="password"
                                className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                placeholder="Enter Confirm Password"
                                name="confirmPassword"
                                required
                            />
                        </div>
                        <input
                            className="h-11 bg-primaryColor hover:bg-hoverColor  w-full text-lg text-textDark font-title rounded-lg "
                            type="submit"
                            value="Register"
                        />
                    </form>
                </div>
            </div>
        </Container>
    );
}

export default Register;
