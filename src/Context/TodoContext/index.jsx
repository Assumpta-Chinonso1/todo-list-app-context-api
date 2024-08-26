import {createContext, useContext, useState } from "react";
import './index.css'

const TodoContext = createContext ()

export const TodoProvider = ({children}) => {
    
    const [todos, setTodos] = useState ([])

    const addTodo = (text) => {
        const newTodo = {text, completed: false}
        setTodos([...todos, newTodo])
    }

    const toggleTodo = (index) => {
        const  newTodos = todos.map((todo, i) => {
            if (i === index) {
                return{...todo, completed : !todo.completed, completedAt: 
                    !todo.completed ? new Date () . toISOString() : null}
            }
            return todo
        })

        setTodos(newTodos)
    }

     return (
        <TodoContext.Provider value={{todos, addTodo, toggleTodo}}>
            {children}

        </TodoContext.Provider>
     )

    }

    export const useTodos = () => {
        const context = useContext(TodoContext)
        return context
     }

     export default TodoContext



    

