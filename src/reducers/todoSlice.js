import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : "todoSlice",
    initialState : ['AAA', 'BBB'],
    reducers: {

        addTodo : (state , param) => {
            console.log("todo..." + state)
            console.log(param)

            return [...state , param.payload]
        }
    }

})

export const {addTodo} = todoSlice.actions

export default todoSlice.reducer
