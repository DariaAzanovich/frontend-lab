import "./Modal.css";
import "./media.css";
import React from "react";
import PropTypes from 'prop-types';

function Modal({ modalState }) {
  return (
      <>
        <div 
            className="modal-bg"
            onClick={() => {modalState(false)}}
        >
            <div 
                className="modal-container"
                onClick={event => event.stopPropagation()}
            >
                <div className="modal-close-btn">
                    <button
                        onClick={() => modalState(false)}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>Modal title</h1>
                </div>
                <div className="body">
                    <p>Modal content</p>
                </div>
            </div>
        </div>
    </>
  );
}

Modal.propTypes = {
    modalState: PropTypes.func.isRequired
};

export default Modal;