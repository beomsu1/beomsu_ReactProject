import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../util/cookieUtil";

const loadCookies = () => {
    const loginObj = getCookie("login")
  
    console.log("login..........obj........")
    console.log(loginObj)
  
    if(!loginObj){
      return initState
    }
    return loginObj
  }



const initState = {
    email: '',
    signed: false
}

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: loadCookies(),
    reducers: {
        requestLogin: (state, param) => {
            const payload = param.payload
            console.log("requestLogin" + payload)

            const loginObj = {
                email: payload.email,
                signed: true
              }
        
              // 객체를 문자열로 변환 - JSON.stringify
              setCookie("login" , JSON.stringify(loginObj) , 1)
        }



    }

})

export const { requestLogin } = loginSlice.actions

export default loginSlice.reducer