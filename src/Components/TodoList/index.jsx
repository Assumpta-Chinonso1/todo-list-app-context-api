import React from 'react';
import { useTodos } from '../../Context/TodoContext';

const TodoList = () => {
    const { todos, toggleTodo, clearTodos } = useTodos();

    return (
        <div className='mt-4'>
            <form>
                <button  className="btn-add clear-todos-button" 
                    onClick={clearTodos}
                    type='clear'>
                    Clear all 
                </button>

                
            </form>
            {todos.length === 0 ? (
                <p>No todos available. Please add some!</p>
            ) : (
                todos.map((todo, index) => (
                    <div key={index} className="todo-item">
                        <div className="todo-content">
                            <input 
                                type="checkbox" 
                                checked={todo.completed}
                                onChange={() => toggleTodo(index)} 
                            />
                            <label className={`ml-2 text-lg ${todo.completed ? 
                                'text-gray-600 line-through' : "text-black"} `}>
                                {todo.text}
                            </label>
                        </div>
                        {todo.completed && todo.completedAt && (
                            <span className="completed-at">
                                Completed At: {new Date(todo.completedAt).toLocaleString()}
                            </span>
                        )}
                    </div>
                ))
            )}
        </div>
    );
}

export default TodoList;



