import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import Question from './Question';

function Quiz() {
    const { category } = useParams();
    const [quizData, setQuizData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/quiz?name=${category}`)
            .then((res) => res.json())
            .then((data) => setQuizData(data));
    }, [category]);
    console.log(quizData);
    return (
        <Container>
            <div className="my-16">
                <div>
                    <Question quizData={quizData} quizName={category} />
                </div>
            </div>
        </Container>
    );
}

export default Quiz;
