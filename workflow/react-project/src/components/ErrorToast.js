import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ErrorToast = () => {
    return (
        <ToastContainer 
            closeButton={false} 
            autoClose={3000}
        />
    )
}