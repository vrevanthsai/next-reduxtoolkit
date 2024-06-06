'use client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApiData } from '../redux/slice';

const ApiUsers = () => {
    const dispatch = useDispatch();
    const apiUsersData = useSelector((data)=>data.userData.userApiData);
    // console.log(apiUsersData)
    useEffect(()=>{
        dispatch(fetchApiData())
         // eslint-disable-next-line
    },[])

  return (
    <div>
        <h1>Redux Toolkit with API</h1>
        {/* <button onClick={()=> dispatch(fetchApiData()) }>load users</button> */}
        {
            apiUsersData.map((u,i)=>{
                return <div key={i}>{u.name}</div>
            })
        }
    </div>
  )
}

export default ApiUsers