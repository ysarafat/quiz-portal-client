import React, { useEffect, useState } from 'react';

function Leaderboard() {
    const [userScore, setUserScore] = useState([]);
    useEffect(() => {
        fetch('https://quiz-portal.onrender.com/score')
            .then((res) => res.json())
            .then((data) => setUserScore(data));
    }, []);
    console.log(userScore);
    return (
        <>
            <div>
                <h1 className="lg:text-5xl text-3xl font-title font-bold text-center">
                    Leaderboard
                </h1>
            </div>
            <div className="relative overflow-x-auto mt-8">
                <table className="w-full text-base text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quiz Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Score
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {userScore?.map((score) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {score.name}
                                </th>
                                <td className="px-6 py-4">{score.email}</td>
                                <td className="px-6 py-4">{score.quizName}</td>
                                <td className="px-6 py-4">{score.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Leaderboard;
