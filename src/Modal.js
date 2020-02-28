import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from "./TodoAdd";
import "./Modal.css";

const Modal = ({ isShowing, hide, handleAddTodo, editItem }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                        <span aria-hidden="true">
                            &times;
                        </span>
                    </button>
                </div>
                <AddTodo
                    addTodo={handleAddTodo}
                    editItem={editItem}
                    hide={hide}
                />
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal;