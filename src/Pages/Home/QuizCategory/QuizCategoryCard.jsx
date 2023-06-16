import React from 'react';
import { Link } from 'react-router-dom';

function QuizCategoryCard({ categoryItem }) {
    const { name, image, description } = categoryItem;

    return (
        <div className="bg-slate-200  rounded-lg border border-slate-300 grid grid-rows-[auto,1fr,auto]">
            <img className="w-full h-[280px] rounded-t-lg" src={image} alt="" />
            <div className="px-5 my-3 flex-grow">
                <h1 className="mb-2 text-xl font-title font-bold">{name}</h1>
                <p>{description}</p>
            </div>
            <Link to={`/quiz/${name}`}>
                <button className=" self-center bg-primaryColor w-full h-11 text-lg text-textDark hover:bg-hoverColor duration-300 rounded-b-lg">
                    Play Quiz
                </button>
            </Link>
        </div>
    );
}

export default QuizCategoryCard;
