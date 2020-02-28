import React, { useState, useEffect, useRef } from "react";
import "./TodoAdd.css"

function AddTodo({ addTodo, hide, editItem }) {
    const [todo, setTodo] = useState('');
    const [priority, setPriority] = useState('');
    const [id, setId] = useState('');
    const fieldRef = useRef();
    const handleOnChange = e => setTodo(e.target.value);
    const handlePriorityChange = e => setPriority(e.target.value);
    const handleOnSubmit = e => {
        e.preventDefault();
        if (todo && todo.trim().length > 0) {
            addTodo({
                id,
                todo,
                priority
            });
            setId('')
            setTodo('');
            setPriority('');
        }
        hide();
    }

    useEffect(() => { //create random id for item
        fieldRef.current.focus();
        setId(Math.random()
            .toString(32)
            .substr(2, 12));
    }, []);

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="form-group">
                <div className="message text-center">
                    Please add To Do for your list:
                    </div>
                < input
                    className="input-todo"
                    type="text"
                    value={todo}
                    onChange={handleOnChange}
                    id="todo"
                    ref={fieldRef}
                />
                <div className="form-priority">
                    <div className="message">Priority</div>
                    <div className="priority-check-form">

                        <input className="form-check-input"
                            id="priorityHigh" type="radio" name="priority"
                            value="3" defaultChecked={priority === 'high'}
                            onChange={handlePriorityChange} />

                        <span > High</span>
                    </div>
                    <div className="priority-check-form">
                        <input className="form-check-input"
                            id="priorityMedium" type="radio" name="priority"
                            value="2" defaultChecked={priority === 'medium'}
                            onChange={handlePriorityChange} />
                        <span > Medium</span>
                    </div>
                    <div className="priority-check-form">
                        <input className="form-check-input"
                            id="priorityLow" type="radio" name="priority"
                            value="1" defaultChecked={priority === 'low'}
                            onChange={handlePriorityChange} />
                        <span> Low</span>
                    </div>
                </div>
                <button disabled={todo.trim().length === 0 || !priority}
                    className="add-btn-todo"
                    type="submit">Submit</button>
            </div>
        </form>
    );
}

export default AddTodo;