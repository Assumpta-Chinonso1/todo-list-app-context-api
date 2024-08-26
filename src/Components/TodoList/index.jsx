import React from 'react';
import { useTodos } from '../../Context/TodoContext';

const TodoList = () => {
    const { todos, toggleTodo } = useTodos();

    return (
        <div className='mt-4'>
            {todos.map((todo, index) => (
                <div key={index}>
                    <input 
                        type="checkbox" 
                        checked={todo.completed}
                        onChange={() => toggleTodo(index)} />
                    <label className={`ml-2 text-lg flex-1 ${todo.completed ? 
                        'text-gray-400 line-through' : "text-black"} `}>
                        {todo.text}
                    </label>
                    {todo.completed && todo.completedAt && (
                        <span >   <br />
                         Completed At: {new Date(todo.completedAt).toLocaleString()}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}

export default TodoList;
