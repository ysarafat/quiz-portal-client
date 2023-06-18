import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Score from './Score';

function Question({ quizData, quizName }) {
    const { user } = useAuth();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState();
    const [showScore, setShowScore] = useState(false);
    const quizScore = {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoUrl,
        score: score + 1,
        quizName,
    };

    const handleOptionChange = () => {
        handleScore();
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption();
        } else {
            setShowScore(true);
            fetch('https://quiz-portal.onrender.com/quiz-score', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(quizScore),
            });
        }
    };
    const handleScore = () => {
        if (
            quizData[currentQuestionIndex].quizOption[selectedOption] ===
            quizData[currentQuestionIndex].quizAnswer
        ) {
            setScore(score + 1);
        }
    };

    return (
        <div className="bg-slate-100 w-1/2 mx-auto my-16 p-8 rounded-lg">
            {showScore ? (
                <Score quizScore={score} numberOfQus={quizData.length} />
            ) : (
                <>
                    <h1 className="text-2xl font-title font-semibold py-5">
                        {currentQuestionIndex + 1}. {quizData[currentQuestionIndex]?.quizQuestion}
                    </h1>
                    <div className="space-y-3">
                        {quizData[currentQuestionIndex]?.quizOption?.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedOption(index)}
                                className={`border border-slate-400 hover:bg-primaryColor duration-300 w-full py-2 px-5 ${
                                    selectedOption === index ? 'bg-hoverColor' : ''
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <input
                        onClick={handleOptionChange}
                        type="submit"
                        value="Next"
                        className="bg-primaryColor w-full py-2 px-5 mt-5"
                    />
                </>
            )}
        </div>
    );
}

export default Question;
