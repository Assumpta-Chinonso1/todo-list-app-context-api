
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
    <form onSubmit={submitHandler}>
           <input type="text"  value={text} placeholder='Add a new Todo' 
           onChange={(e) => {setText(e.target.value)}}/>
           <button type="submit">AddTodo</button>
    </form>
  )
}

export default AddTodo