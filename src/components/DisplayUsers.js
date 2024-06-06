"use client";
import { removeUser,setInitialUsers } from "@/app/redux/slice";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

const DisplayUsers = () => {
  let userData = useSelector((data) => data.userData.users);
  const dispatch = useDispatch();
  // console.log(userData)

  useEffect(()=>{
      let users= localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
      dispatch(setInitialUsers(users));
     // eslint-disable-next-line
  },[])

  return (
    <div className="displayusers">
      <h2>User Lists</h2>
      {userData?.length > 0 ? (
        <>
          {userData?.map((item, i) => {
            return (
              <div key={item.id} className="userlist">
                <span>
                  {i + 1}-{item.name}
                </span>
                <button
                  className="remove"
                  onClick={() => dispatch(removeUser(item.id))}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </>
      ) : (
        <h3>no user data</h3>
      )}
    </div>
  );
};

export default DisplayUsers;
