import React from 'react';
import { useTodos } from '../../Context/TodoContext';

const TodoList = () => {
    const { todos, toggleTodo } = useTodos();

    return (
        <div className='mt-4'>
            {todos.map((todo, index) => (
                <div key={index} className="flex items-center mb-2">
                    <input 
                        type="checkbox" 
                        checked={todo.completed}
                        onChange={() => toggleTodo(index)} 
                        className='form-checkbox h-5 w-5 text-blue-600'
                    />
                    <label className={`ml-2 text-lg flex-1 ${todo.completed ? 
                        'text-gray-400 line-through' : "text-black"} `}>
                        {todo.text}
                    </label>
                    {todo.completed && todo.completedAt && (
                        <span className='text-sm text-gray-500'>
                            Completed At: {new Date(todo.completedAt).toLocaleString()}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}

export default TodoList;
