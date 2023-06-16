import { useEffect, useState } from 'react';

const useCategory = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('https://quiz-portal.onrender.com/quiz-category')
            .then((res) => res.json())
            .then((data) => setCategory(data));
    }, []);
    return [category];
};

export default useCategory;
