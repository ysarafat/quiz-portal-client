import { useEffect, useState } from 'react';

const useCategory = () => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://quiz-portal.onrender.com/quiz-category')
            .then((res) => res.json())
            .then((data) => {
                setCategory(data);
                setLoading(false);
            });
    }, []);
    return [category, loading];
};

export default useCategory;
