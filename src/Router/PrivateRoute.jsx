import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PrivateRoute({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace />;
}

export default PrivateRoute;
