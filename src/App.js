import React from 'react';
import './App.css';
import Todo from "./Todo";
import useSessionStorage from "./UseSessionStorage";
import Modal from "./Modal";
import UseModal from "./UseModal";

function App() {
  const [todos, storeTodo, removeTodo] = useSessionStorage();
  // const [editItem, setEditItem] = React.useState('')
  const handleAddTodo = (todo) => storeTodo(todo);
  const handleDeleteTodo = (index) => removeTodo(index);

  const { isShowing, toggle } = UseModal();
  // const toggleEditModal = (todoItem) => {
  //   setEditItem(todoItem);
  // }
  const toggleAddTodo = () => {
    toggle();
    // setEditItem('');
  }

  return (
    <div className="main-app">
      <h1 className="text-center text-color-white">
        To Do List
      </h1>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        handleAddTodo={handleAddTodo}
      // editItem={editItem}
      />
      <Todo
        list={todos}
        deleteTodo={handleDeleteTodo}
        // toggleEditModal={toggleEditModal}
        toggle={toggle}
      />
      <button className="add-btn" onClick={toggleAddTodo}>
        Add To Do
      </button>
    </div >
  )
}

export default App;
