const { createSlice, nanoid } = require("@reduxjs/toolkit")

const initialState = {
    todo :[]
}

const todoSlice = createSlice({
    name:"todoSlice",
    initialState,
    reducers:{
        addTodos:(state,action)=>{
            // console.log(action)
            let data = {
                id:nanoid(),
                name:action.payload
            }
            state.todo.push(data);
        }
    }
})

export const { addTodos} = todoSlice.actions;
export default todoSlice.reducer;