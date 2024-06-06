// 'use client'
// import { useEffect } from "react";

// import dynamic from "next/dynamic";
// import lsdynamic from "./lsdynamic";
// const lsdynamic = dynamic(() => import("./lsdynamic"),{
//   ssr: false,
// })

const {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

// const isBrowser = typeof window !== "undefined";
// let item;
// if (typeof window !== "undefined") {
// item = localStorage.getItem("users");
// item = JSON.parse(item);
// }

// let item='';
// useEffect(()=>{
//   item = localStorage.getItem("users");
//   item = JSON.parse(item);
// },[])

// let ls = lsdynamic();
// console.log(ls)

const initialState = {
  // users:  localStorage.getItem("users")
  //   ? JSON.parse(localStorage.getItem("users"))
  //   : [],
  // users: item?item:[]
  // users: ls,
  users: [],
  userApiData:[],
};

// redux-toolkit with API
export const fetchApiData = createAsyncThunk("fetchApiData", async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
});

const Slice = createSlice({
  name: "addUsersSlice",
  initialState,
  reducers: {
    setInitialUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      // console.log(action);
      const data = {
        id: nanoid(),
        name: action.payload, // from input-data of AddUser-component
      };
      state.users.push(data);
      let userData = JSON.stringify(current(state.users));
      localStorage.setItem("users", userData);
    },
    removeUser: (state, action) => {
      // console.log(action)
      const data = state.users.filter((item) => {
        return item.id !== action.payload;
      });
      state.users = data;
      let userData = JSON.stringify(data);
      localStorage.setItem("users", userData);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiData.fulfilled, (state, action) => {
      // console.log(action)
      state.isLoading = false;
      state.userApiData = action.payload;
    });
  },
});

export const { addUser, removeUser, setInitialUsers } = Slice.actions;
export default Slice.reducer;
