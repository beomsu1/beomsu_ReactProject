import { useState } from "react";
import { useDispatch } from "react-redux";
import { requestLogin } from "../../reducers/loginSlice";

const initState = {
    email : 'beomsu@react.com',
    pw : '1221'
}
const LoginComponent = () => {

    const [loginInfo , setLoginInfo] = useState({...initState})

    const dispatch = useDispatch()

    return ( 
        <div>
        <div className="m-2 p-2 border-2 w-1/5">
            <label className="mr-12">Email</label>
            <input type="text" name="email" value={loginInfo.email} onChange={()=>{}}></input>
        </div>
        <div className="m-2 p-2 border-2 w-1/5">
            <label className="mr-5">Password</label>
            <input type="password" name="pw" value={loginInfo.pw} onChange={()=>{}}></input>
        </div>
        <div>
            <button className="m-2 p-2 border-2" onClick={() => dispatch(requestLogin(loginInfo))}>Login</button>
        </div>
        </div>
     );
}
 
export default LoginComponent;