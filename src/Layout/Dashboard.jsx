import React, { useState } from 'react';
import { HiBars3BottomLeft, HiXMark } from 'react-icons/hi2';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = (
        <>
            {' '}
            <li>
                <Link className="text-lg text-textDark " to="leaderboard">
                    Leaderboard
                </Link>
            </li>
            <li>
                <Link className="text-lg text-textDark " to="quiz-category">
                    Add Quiz Category
                </Link>
            </li>
            <li>
                <Link className="text-lg text-textDark " to="add-quiz">
                    Add Quiz Questions
                </Link>
            </li>
            <li>
                <Link className="text-lg text-textDark " to="/">
                    Back To Home
                </Link>
            </li>
        </>
    );
    return (
        <div>
            <section className="grid grid-cols-7 ">
                <div className="lg:col-span-1 relative">
                    <div className="bg-primaryColor h-screen fixed left-0 w-[274px] p-5 hidden lg:block">
                        <Link to="/">
                            <h1 className="text-2xl font-bold text-primary-text mb-5">
                                QUIZ <span className="text-white">PORTAL</span>
                            </h1>
                        </Link>
                        <ul className="space-y-3">{navLinks}</ul>
                    </div>
                </div>
                <div className="lg:col-span-6 col-span-7 p-5 overflow-x-hidden">
                    <div className="lg:w-3/4 px-4  mx-auto">
                        <Outlet />
                    </div>
                </div>
            </section>
            {/* mobile sidebar */}
            <div className=" fixed top-0 right-0 left-0 py-3 px-4 lg:hidden  nb_border bg-[#EDF1F7]">
                <div className="flex items-center lg:justify-end justify-between">
                    {' '}
                    <label htmlFor="my-drawer-2" className=" drawer-button ">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <HiXMark size={25} /> : <HiBars3BottomLeft size={25} />}
                        </button>
                    </label>
                    {isOpen && (
                        <div className="bg-primaryColor absolute top-[56px] border left-0 w-1/2 py-3 px-4 flex flex-col gap-2 min-h-[calc(100vh-48px)] ">
                            <h1 className="text-2xl font-bold text-primary-text mb-5">
                                QUIZ <span className="text-white">PORTAL</span>
                            </h1>
                            <ul className="space-y-3"> {navLinks} </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
