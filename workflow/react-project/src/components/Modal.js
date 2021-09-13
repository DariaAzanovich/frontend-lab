import "./Modal.css";
import "./media.css";
import React from "react";
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

function Modal({ modalState = false, title, content}) {
    return (
        <>
            {createPortal(
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
                                <div className="title">{title}</div>
                                <FontAwesomeIcon 
                                    icon={faTimes} 
                                    size="2x"
                                    onClick={() => modalState(false)}
                                />
                            </div>
                            <div className="body">
                                {content}
                            </div>
                        </div>
                    </div>
                </>, document.getElementById('modal-root')
            )}
        </>
    )
}

Modal.propTypes = {
    modalState: PropTypes.func.isRequired
};

export default Modal;