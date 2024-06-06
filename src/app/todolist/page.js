'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodos } from '../redux/todoSlice';

const TodoList = () => {
    const [todo,setTodo] = useState('')
    const dispatch = useDispatch();
    const todoData = useSelector((data) => data.todoData.todo);
    // console.log(todoData)
  return (
    <div>
        <h1>ADD Todo</h1>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Enter your Todo' />
        <button onClick={()=>dispatch(addTodos(todo))}>Add Todo</button>
        <h3>Todo List</h3>
        {
            todoData.map((todo,i)=>{
                return(
                    <div key={todo.id}>{i+1}- {todo.name}</div>
                )
            })
        }
    </div>
  )
}

export default TodoList