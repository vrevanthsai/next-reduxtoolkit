'use client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInitialUsers } from '../redux/slice'

const Customer = () => {
    const userData = useSelector((data) => data.userData.users)

    // to set initial valuse of redux-state from localstorage
    const dispatch = useDispatch();
    useEffect(()=>{
        let users= localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users"))
        : [];
        dispatch(setInitialUsers(users));
       // eslint-disable-next-line
    },[])

  return (
    <div>
        <h1>Customer Page</h1>
        {
            userData.map((item)=>{
                return(
                    <div key={item.id}>{item.name}</div>
                )
            })
        }
    </div>
  )
}

export default Customer