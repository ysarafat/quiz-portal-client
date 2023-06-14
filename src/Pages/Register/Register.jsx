import React from 'react';
import image from '../../assets/Login-rafiki.svg';
import Container from '../../components/Container';

function Register() {
    return (
        <Container>
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
                <div className="w-full">
                    <img className="" src={image} alt="" />
                </div>
                <div className="w-full">
                    <form className="space-y-3 bg-slate-200 p-5 rounded-lg">
                        <h1 className="text-3xl font-title font-bold text-center mb-7">
                            Register User
                        </h1>
                        <div className="w-full">
                            <label className="text-lg text-textDark">Full Name</label>
                            <input
                                type="text"
                                className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                placeholder="Enter Your Full Name"
                                name="name"
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-lg text-textDark">Email Address</label>
                            <input
                                type="email"
                                className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                placeholder="Enter Your Email"
                                name="email"
                            />
                        </div>
                        <div className="w-full ">
                            <label className="text-lg text-textDark ">Profile Picture</label>
                            <input
                                type="file"
                                className="h-11 w-full border mt-2 border-slate-200 bg-white outline-primaryColor rounded-lg text-textDark file:bg-primaryColor file:border-none file:h-11 "
                                name="image"
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-lg text-textDark">Password</label>
                            <input
                                type="password"
                                className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                placeholder="Enter Your Password"
                                name="password"
                            />
                        </div>
                        <div className="w-full ">
                            <label className="text-lg text-textDark">Confirm Password</label>
                            <input
                                type="password"
                                className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                placeholder="Enter Confirm Password"
                                name="confirmPassword"
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
