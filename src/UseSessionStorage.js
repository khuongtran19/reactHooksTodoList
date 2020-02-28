import { useState, useEffect } from "react";

function useSessionStorage() {
    const [todos, setTodos] = useState([]);
    const getTodosFromStorage = () => JSON.parse(
        window.sessionStorage.getItem('todoList')
    );

    const setTodosToStorage = items =>
        window.sessionStorage.setItem('todoList', JSON.stringify(items));
    useEffect(() => {
        const todosFromStorage = getTodosFromStorage();
        if (todosFromStorage) {
            setTodos(todosFromStorage);
        }
    }, []);

    const storeTodo = (todo) => {
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        setTodosToStorage(newTodos);
    }

    const removeTodo = (index) => {
        const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
        setTodos(newTodos);
        setTodosToStorage(newTodos);
    }

    return [todos, storeTodo, removeTodo];
}

export default useSessionStorage