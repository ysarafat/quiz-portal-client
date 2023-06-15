import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layout/Dashboard';
import Main from '../Layout/Main';
import AddQuiz from '../Pages/Admin/AddQuiz/AddQuiz';
import AddQuizCategory from '../Pages/Admin/AddQuizCategory/AddQuizCategory';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

const router = new createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/login',
                element: <Login />,
            },
        ],
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'add-quiz',
                element: <AddQuiz />,
            },
            {
                path: 'quiz-category',
                element: <AddQuizCategory />,
            },
            {
                path: 'add-quiz',
                element: <AddQuiz />,
            },
        ],
    },
]);

export default router;
