import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ErrorToast = ({ errors }) => {

    errors.forEach(error => {
        if(error) {
            toast.error(error.toString());
        }
    })    

    return (
        <ToastContainer />
    )
}