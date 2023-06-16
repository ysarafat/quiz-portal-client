import React from 'react';

function Score({ quizScore, numberOfQus }) {
    return (
        <div>
            <h1 className="text-xl font-bold font-title text-center">
                Your Score: {quizScore} out of {numberOfQus}
            </h1>
        </div>
    );
}

export default Score;
