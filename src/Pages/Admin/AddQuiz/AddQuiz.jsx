/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useCategory from '../../../hooks/useCategory';

function AddQuiz() {
    const [category] = useCategory();
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [loading, setLoading] = useState(false);

    const handleOption1 = (event) => {
        setOption1(event.target.value);
    };
    const handleOption2 = (event) => {
        setOption2(event.target.value);
    };
    const handleOption3 = (event) => {
        setOption3(event.target.value);
    };
    const handleOption4 = (event) => {
        setOption4(event.target.value);
    };
    const quizOption = [option1, option2, option3, option4];

    const handleAddQuiz = (event) => {
        event.preventDefault();
        setLoading(true);
        const form = event.target;
        const quizQuestion = form.name.value;
        const quizCategory = form.category.value;
        const quizAnswer = form.answer.value;
        const quizInfo = { quizQuestion, quizCategory, quizOption, quizAnswer };
        fetch('https://quiz-portal.onrender.com/add-quiz', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(quizInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Question Add Successful',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    form.reset();
                    setLoading(false);
                }
            });
    };
    return (
        <div>
            <div>
                <h1 className="lg:text-4xl text-3xl font-title font-bold text-center">Add Quiz</h1>
            </div>
            <div>
                <form onSubmit={handleAddQuiz} className="mt-10  rounded-lg" action="">
                    <div className="lg:flex  space-y-3 items-center gap-6">
                        <div className="w-full">
                            <label className="text-lg text-textDark">Quiz Question</label>
                            <input
                                type="text"
                                className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                placeholder="Enter Quiz Question"
                                name="name"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-lg text-textDark">Quiz Category</label>
                            <select
                                id=""
                                className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                name="category"
                            >
                                {category?.map((categoryItem) => (
                                    <option
                                        key={categoryItem._id}
                                        className="bg-slate-200 text-lg py-2"
                                        value={categoryItem.name}
                                    >
                                        {categoryItem.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="lg:flex space-y-3 items-center gap-6">
                        <div className="w-full">
                            <label className="text-lg text-textDark">Quiz Option 1</label>
                            <input
                                type="text"
                                className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                placeholder="Enter Quiz Option"
                                name="option1"
                                onChange={handleOption1}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-lg text-textDark">Quiz Option 2</label>
                            <input
                                type="text"
                                className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                placeholder="Enter Quiz Option"
                                name="option2"
                                onChange={handleOption2}
                                required
                            />
                        </div>
                    </div>
                    <div className="lg:flex space-y-3 items-center gap-6 ">
                        <div className="w-full">
                            <label className="text-lg text-textDark">Quiz Option 3</label>
                            <input
                                type="text"
                                className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                placeholder="Enter Quiz Option"
                                name="option3"
                                onChange={handleOption3}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-lg text-textDark">Quiz Option 4</label>
                            <input
                                type="text"
                                className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                                placeholder="Enter Quiz Option"
                                name="option4"
                                onChange={handleOption4}
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="text-lg text-textDark">Select Correct Answer</label>
                        <select
                            id=""
                            className="h-11 w-full border mt-2 border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                            name="answer"
                        >
                            {quizOption?.map((option, index) => (
                                <option
                                    key={index}
                                    className="bg-slate-200 text-lg py-2"
                                    value={option}
                                >
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <input
                        className="h-11 bg-primaryColor hover:bg-hoverColor disabled:bg-slate-300 mt-4 w-full text-lg text-textDark font-title rounded-lg "
                        disabled={loading}
                        type="submit"
                        value={loading ? 'Please Wait' : 'Add Question'}
                    />
                </form>
            </div>
        </div>
    );
}

export default AddQuiz;
