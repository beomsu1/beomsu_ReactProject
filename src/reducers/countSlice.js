import { createSlice } from "@reduxjs/toolkit";

// createSlice : store , reducer 연결 역할
const countSlice = createSlice({
    
    name : "CountSlice",
    initialState : {num : 5},
    reducers : {
        // 함수 첫번쨰 파라미터는 무조건 state
        inc : (state , param ,third) => {
            console.log("inc...")

            console.log(param)
            console.log(third)

            return { num : state.num + param.payload}
        },
        dec : (state , param ,third) => {
            console.log("dec...")

            console.log(param)
            console.log(third)

            return { num : state.num - param.payload}
        }
    }

})

// 액션 설정
export const {inc , dec} = countSlice.actions

export default countSlice.reducer