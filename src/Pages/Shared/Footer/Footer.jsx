import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-slate-900 text-white w-full">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm ">© 2023 Quiz Portal . All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium ">
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6 ">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="my-score" className="mr-4 hover:underline md:mr-6">
                            My Score
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:underline">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
