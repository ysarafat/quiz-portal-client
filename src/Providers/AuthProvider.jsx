/* eslint-disable react/jsx-no-constructed-context-values */
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);

function AuthProviders({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // update user Profile
    const updateUser = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
            .then(() => {
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    // login user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    // logout user
    const logoutUser = () => {
        setLoading(true);
        signOut(auth).then(() => {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Logout Successful',
                showConfirmButton: false,
                timer: 1500,
            });
        });
    };

    // user observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        createUser,
        updateUser,
        loginUser,
        logoutUser,
        loading,
        user,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}

export default AuthProviders;
