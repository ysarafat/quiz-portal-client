import React, { useState } from 'react';
import { HiBars3BottomLeft, HiXMark } from 'react-icons/hi2';
import { Link, NavLink } from 'react-router-dom';
import Container from '../../../components/Container';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = (
        <>
            <NavLink
                to="/"
                onClick={() => setIsOpen(!isOpen)}
                className={({ isActive }) =>
                    isActive ? 'text-primaryColor' : ' hover:text-primaryColor duration-300'
                }
            >
                <li>Home</li>
            </NavLink>
            <NavLink
                to="/toys"
                onClick={() => setIsOpen(!isOpen)}
                className={({ isActive }) =>
                    isActive ? 'text-primaryColor' : ' hover:text-primaryColor duration-300'
                }
            >
                <li>Quiz</li>
            </NavLink>
            <NavLink
                to="/blog"
                onClick={() => setIsOpen(!isOpen)}
                className={({ isActive }) =>
                    isActive ? 'text-primaryColor' : ' hover:text-primaryColor duration-300'
                }
            >
                <li>Blog</li>
            </NavLink>{' '}
            <NavLink
                to="/login"
                onClick={() => setIsOpen(!isOpen)}
                className={({ isActive }) =>
                    isActive ? 'text-primaryColor' : ' hover:text-primaryColor duration-300'
                }
            >
                <li>Login</li>
            </NavLink>
            <NavLink
                to="/register"
                onClick={() => setIsOpen(!isOpen)}
                className={({ isActive }) =>
                    isActive ? 'text-primaryColor' : ' hover:text-primaryColor duration-300'
                }
            >
                <li>Register</li>
            </NavLink>
            <li className=" hover:text-primaryColor duration-300">
                <button>logout</button>
            </li>
        </>
    );

    return (
        <div className="sticky top-0 z-40 border-b lg:py-4 py-2 bg-white ">
            <Container>
                <div className="container mx-auto  hidden lg:flex justify-between items-center px-4">
                    <Link to="/">
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-bold text-primary-text ">
                                QUIZ <span className="text-primaryColor">PORTAL</span>
                            </h1>
                        </div>
                    </Link>
                    <div>
                        <ul className="flex items-center text-base font-medium gap-5">
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </Container>
            <div className="lg:hidden z-40 bg-white  py-2 px-4 flex justify-between items-center">
                <div>
                    <Link to="/">
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-bold ">
                                QUIZ <span className="text-primaryColor">PORTAL</span>
                            </h1>
                        </div>
                    </Link>
                </div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiXMark size={30} /> : <HiBars3BottomLeft size={30} />}
                </button>
                {isOpen && (
                    <ul className="absolute top-[65px]  bg-slate-100 border right-0 w-1/2 py-3 px-4 flex flex-col gap-2 min-h-[calc(100vh-48px)] ">
                        {navLinks}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Navbar;
