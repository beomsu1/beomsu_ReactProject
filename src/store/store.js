import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../reducers/countSlice";
import todoSlice from "../reducers/todoSlice";
import loginSlice from "../reducers/loginSlice";
import cartSlice from "../reducers/cartSlice";

export default configureStore({
    reducer : {
        // counter 라는 변수로 countSlice 파일에서 생성된 슬라이스를 스토어의 리듀서로 사용
        counter : countSlice,
        todo : todoSlice,
        login : loginSlice,
        cart : cartSlice
    }
})