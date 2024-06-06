'use client'
import { addUser } from '@/app/redux/slice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const AddUsers = () => {
  const [name,setName] = useState('');
  const dispatch = useDispatch();

  const userDispatch = () => {
    // console.log(name);
    dispatch(addUser(name))
  }

  return (
    <div className='adduser'>
        <h2>AddUsers</h2>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Add New User' />
        <button onClick={userDispatch}>Add User</button>
    </div>
  )
}

export default AddUsers