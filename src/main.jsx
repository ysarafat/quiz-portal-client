import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthProviders from './Providers/AuthProvider';
import router from './Router/Router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProviders>
            <RouterProvider router={router} />
        </AuthProviders>
    </React.StrictMode>
);
