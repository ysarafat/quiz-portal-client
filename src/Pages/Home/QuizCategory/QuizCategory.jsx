import React from 'react';
import Container from '../../../components/Container';
import Spinner from '../../../components/Spinner';
import useCategory from '../../../hooks/useCategory';
import QuizCategoryCard from './QuizCategoryCard';

function QuizCategory() {
    const [category, loading] = useCategory();
    return (
        <Container>
            <div className="py-10">
                <div>
                    <h1 className="text-center text-4xl font-bold font-title">Quiz Category</h1>
                </div>
                {loading ? (
                    <Spinner />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                        {category?.map((items) => (
                            <QuizCategoryCard key={items._id} categoryItem={items} />
                        ))}
                    </div>
                )}
            </div>
        </Container>
    );
}

export default QuizCategory;
