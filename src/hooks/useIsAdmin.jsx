import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useIsAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://quiz-portal.onrender.com/user?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setIsAdmin(data.role === 'admin');
                setIsAdminLoading(false);
            });
    }, [user]);
    return [isAdmin, isAdminLoading];
};

export default useIsAdmin;
