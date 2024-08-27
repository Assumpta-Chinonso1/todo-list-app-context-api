import { createContext, useContext, useEffect, useState } from "react";
import './index.css';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(() => {
        const localTodos = localStorage.getItem("todos");
        return localTodos ? JSON.parse(localTodos) : [];
    });

    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = { text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (index) => {
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return {
                    ...todo,
                    completed: !todo.completed,
                    completedAt: !todo.completed ? new Date().toISOString() : null,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const clearTodos = () => {
        setTodos([]);
        localStorage.removeItem("todos"); // This clears the 'todos' key from localStorage
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, clearTodos }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => {
    const context = useContext(TodoContext);
    return context;
};

export default TodoContext;




    

