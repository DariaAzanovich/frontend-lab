import "./Modal.css";
import "./media.css";
import React, { Fragment } from "react";

function Modal({ closeModal }) {
  return (
      <Fragment>
        <div 
            className="modal-bg"
            onClick={() => {closeModal(false)}}
        >
            <div 
                className="modal-container"
                onClick={event => event.stopPropagation()}
            >
                <div className="modal-close-btn">
                    <button
                        onClick={() => closeModal(false)}
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
    </Fragment>
  );
}

export default Modal;