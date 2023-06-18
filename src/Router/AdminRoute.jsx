import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';
import useAuth from '../hooks/useAuth';
import useIsAdmin from '../hooks/useIsAdmin';

function AdminRoute({ children }) {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useIsAdmin();
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <Spinner />;
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace />;
}

export default AdminRoute;
