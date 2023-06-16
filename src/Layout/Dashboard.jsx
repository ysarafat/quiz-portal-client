import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <section className="grid grid-cols-7 ">
                <div className="lg:col-span-1 relative">
                    <div className="bg-primaryColor h-screen fixed left-0 w-[274px] p-5 hidden lg:block">
                        <h1 className="text-2xl font-bold text-primary-text mb-5">
                            QUIZ <span className="text-white">PORTAL</span>
                        </h1>
                        <ul className="space-y-3">
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
                        </ul>
                    </div>
                </div>
                <div className="lg:col-span-6 col-span-7 p-5 overflow-x-hidden">
                    <div className="w-3/4 mx-auto">
                        <Outlet />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
