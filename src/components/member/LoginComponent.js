import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginThunk} from "../../reducers/loginSlice";

const initState = {
    email:'beomsu1@aaa.com',
    pw:'1111'
}

const LoginComponent = () => {
    
    const loginState = useSelector(state => state.login)

    const [loginInfo, setLoginInfo] = useState({...initState})

    const dispatch = useDispatch()

    const errorMsg = loginState.errorMsg

    console.log("ERRORMSG: " + errorMsg)

    return ( 
        <div>
            <div className="text-3xl bg-red-500"> 
                {loginState.loading ? '로그인중':''}
            </div>


            {errorMsg ? <div className="text-3xl bg-red-500">이메일과 패스워드를 다시 확인해 주세요</div>: <></>}

            <div>
                <label>Email</label>
                <input type="text" name="email" 
                value={loginInfo.email}
                onChange={()=>{}}
                ></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="pw" value={loginInfo.pw} onChange={()=>{}}></input>
            </div>
            <div>
                <button onClick={() => dispatch(postLoginThunk(loginInfo))}>LOGIN</button>
            </div>
        </div>
    );
}
 
export default LoginComponent;