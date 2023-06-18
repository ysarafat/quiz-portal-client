import React from 'react';
import { Link } from 'react-router-dom';

function Score({ quizScore, numberOfQus }) {
    return (
        <div className="text-center">
            <h1 className="text-xl font-bold font-title text-center">
                Your Score: {quizScore} out of {numberOfQus}
            </h1>
            <Link to="/">
                <button className="h-11 px-4 bg-primaryColor hover:bg-hoverColor text-center rounded-lg text-lg mt-5">
                    Back To Home
                </button>
            </Link>
        </div>
    );
}

export default Score;
