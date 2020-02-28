import React/*, { useState, useEffect }*/ from "react";
import "./Todo.css"

function Todo({ list, deleteTodo, toggleEditModal, toggle }) {
    // const [todoItem, setTodoItem] = useState('');
    const handleDeleteClick = (index) => e => {
        deleteTodo(index);
    }
    const sortList = list.sort(
        (a, b) => {
            return b.priority - a.priority
        }
    )
    // const handleToggleClick = (index) => e => {
    //     toggle();
    //     for (let i in list) {
    //         if (list[i].id === index) {
    //             return setTodoItem(list[i]);
    //         }
    //     }
    // }
    // toggleEditModal(todoItem)
    // useEffect(() => {
    //     toggleEditModal(todoItem);
    // })
    return (
        <div className="todo-list">
            {
                sortList && sortList.map((item, i) => {
                    let backgroundColor;
                    if (item.priority === "3") {
                        backgroundColor = "#c0392b";

                    }
                    else if (item.priority === "2") {
                        backgroundColor = "#e67e22";
                    }
                    else if (item.priority === "1") {
                        backgroundColor = "#1abc9c";
                    }
                    return (
                        <div className="todo-list-item" style={{ background: backgroundColor }} key={i}>
                            <p className="todo-list-item-text"
                                style={{ color: "white" }}>{item.todo}</p>
                            <div style={{ float: "right" }}>
                                {/* <button
                                    onClick={handleToggleClick(item.id)}>
                                    Edit
                                </button> */}
                                <button
                                    onClick={handleDeleteClick(i)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Todo;