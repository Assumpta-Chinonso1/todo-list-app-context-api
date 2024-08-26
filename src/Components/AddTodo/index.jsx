
import React, { useState } from 'react'
import { useTodos } from '../../Context/TodoContext'

const AddTodo = () => {
    const [text, setText] = useState('')
    const {addTodo} = useTodos()

    const submitHandler = (e) => {
        e.preventDefault()
        if (!text.trim()) return 
          addTodo(text)
         setText('')
        
    }
  return (
    <form onSubmit={submitHandler} className='flex flex-row gap-x-2 justify-between'>
           <input type="text"  value={text} placeholder='Add a new Todo' 
           onChange={(e) => {setText(e.target.value)}}
           className="form-input w-full rounded-md border shadow-sm p-4"/>
           <button type="submit" className='w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded'>AddTodo</button>
    </form>
  )
}

export default AddTodo