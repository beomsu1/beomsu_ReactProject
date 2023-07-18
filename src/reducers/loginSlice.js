import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCookie, setCookie } from "../util/cookieUtil"
import { postLogin } from "../api/memberAPI"

// 첫번 째 파라미터는 이름 , 두번 째는 함수 
export const postLoginThunk = createAsyncThunk('postLoginThunk', (params) => {
  // 함수 안에서 비동기호출
  return postLogin(params)
})


const loadCookies = () => {
  const loginObj = getCookie("login")

  console.log("login..........obj........")
  console.log(loginObj)

  if (!loginObj) {
    return initState
  }
  return loginObj
}


const initState = {
  email: '',
  nickname : '',
  admin : false,
  loading : false,
  errorMsg : null
}


const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: loadCookies(), // 이 함수 결과를 초기화 값으로 잡아라
  reducers: {
    requestLogin: (state, action) => {
      const payload = action.payload
      console.log("requestLogin", payload)

      const loginObj = {
        email: payload.email,
        signed: true
      }

      // 객체를 문자열로 변환 - JSON.stringify
      setCookie("login", JSON.stringify(payload), 1)


      return payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(postLoginThunk.fulfilled , (state , action) => {
      // 현재 로그인한 사용자의 정보 - action.payload
      console.log("fulfilled" , action.payload)
      const {email , nickname , admin , errorMsg} = action.payload

      if(errorMsg){
        state.errorMsg = errorMsg
      }

      state.loading = false
      state.email = email
      state.nickname=nickname
      state.admin = admin

      setCookie("login", JSON.stringify(action.payload), 1)
    })
    .addCase(postLoginThunk.pending, (state , action) => {
      console.log("pending")
      state.loading = true
    })
    .addCase(postLoginThunk.rejected, (state , action) => {
      console.log("rejected")
    })
  }
})

export const {requestLogin} = loginSlice.actions

export default loginSlice.reducer