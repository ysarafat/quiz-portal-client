import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layout/Dashboard';
import Main from '../Layout/Main';
import AddQuiz from '../Pages/Admin/AddQuiz/AddQuiz';
import AddQuizCategory from '../Pages/Admin/AddQuizCategory/AddQuizCategory';
import Leaderboard from '../Pages/Admin/Leaderboard/Leaderboard';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import MyScore from '../Pages/MyScore/MyScore';
import Quiz from '../Pages/Quiz/Quiz';
import Register from '../Pages/Register/Register';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';

const router = new createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/quiz/:category',
                element: (
                    <PrivateRoute>
                        <Quiz />
                    </PrivateRoute>
                ),
            },
            {
                path: 'my-score',
                element: (
                    <PrivateRoute>
                        <MyScore />
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: 'dashboard',
        element: (
            <AdminRoute>
                <Dashboard />
            </AdminRoute>
        ),
        children: [
            {
                path: 'leaderboard',
                element: (
                    <AdminRoute>
                        <Leaderboard />
                    </AdminRoute>
                ),
            },
            {
                path: 'add-quiz',
                element: (
                    <AdminRoute>
                        <AddQuiz />
                    </AdminRoute>
                ),
            },
            {
                path: 'quiz-category',
                element: (
                    <AdminRoute>
                        <AddQuizCategory />
                    </AdminRoute>
                ),
            },
        ],
    },
]);

export default router;
