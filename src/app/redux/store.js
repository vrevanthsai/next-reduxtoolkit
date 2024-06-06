const { configureStore } = require("@reduxjs/toolkit");
import usersReducer from './slice'
import todoReducer from './todoSlice'

export const store = configureStore({
    // reducer:reducer,
    reducer:{
        userData: usersReducer,
        todoData: todoReducer,
    }
})