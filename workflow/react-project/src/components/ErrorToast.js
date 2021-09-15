import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ErrorToast = ({ text }) => {
    return (
        <>
            {toast.error(text, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                toastId: ''
            })}
            <ToastContainer />
        </>
    )
}