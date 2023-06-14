import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layout/Dashboard';
import AddQuiz from '../Pages/Admin/AddQuiz/AddQuiz';
import AddQuizCategory from '../Pages/Admin/AddQuizCategory/AddQuizCategory';

const router = new createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        children: [
            {
                path: '/',
                element: <AddQuiz />,
            },
            {
                path: 'quiz-category',
                element: <AddQuizCategory />,
            },
        ],
    },
]);

export default router;
