import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initState = {

    items : [], // item 에는 이메일과 상품번호
    loading : false
}

// addCart 비동기 함수
export const addCartThunk = createAsyncThunk('addCartThunk', async(items)=> {
    
    const res = await axios.post(`http://localhost:8080/api/cart/add`, items)

    console.log("items: " + items.email , + items.pno)

    return res.data

})

// getCart 비동기 함수 (이메일을 가지고 데이터를 가져와야함)
// async의 반환은 무조건 promise
export const getCartThunk = createAsyncThunk('getCartThunk', async(email)=> {

    // 이메일이 존재하지 않을 때 -> promise를 생성해서 반환
    if(!email){
        return new Promise((resolve , reject)=>{

            // 해결이 됐다면 빈배열 반환
            resolve([])
        })
    }

    const res = await axios.get(`http://localhost:8080/api/cart/${email}`)

    return res.data

})


const cartSlice = createSlice({
    name : 'cartSlice',
    initialState : initState,
    extraReducers : (builder) => {
        builder.addCase(addCartThunk.fulfilled , (state , action) => {
            console.log("addCartThunk fulfilled...." + action.payload)

            // 상태값 부여
            state.items = action.payload
        })
        .addCase(getCartThunk.fulfilled, (state, action) =>{
            console.log("getCartThunk fulfilled..." + action.payload)

            state.items = action.payload
        })
    }
})

export default cartSlice.reducer