import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginThunk } from "../../reducers/loginSlice";

const initState = {
    email: 'beomsu1@aaa.com',
    pw: '1111'
}

const LoginComponent = () => {

    const loginState = useSelector(state => state.login)

    const [loginInfo, setLoginInfo] = useState({ ...initState })

    const dispatch = useDispatch()

    const errorMsg = loginState.errorMsg

    console.log("ERRORMSG: " + errorMsg)

    return (
        <div>
            <div className="text-3xl bg-red-500">
                {loginState.loading ? '로그인중' : ''}
            </div>


            {errorMsg ? <div className="text-3xl bg-red-500">이메일과 패스워드를 다시 확인해 주세요</div> : <></>}

            <div class="p-4 max-w-md mx-auto">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        type="text"
                        name="email"
                        value={loginInfo.email}
                        onChange={() => { }}
                        placeholder="Enter your email"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 "
                        type="password"
                        name="pw"
                        value={loginInfo.pw}
                        onChange={() => { }}
                        placeholder="Enter your password"
                    />
                </div>
                <div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => dispatch(postLoginThunk(loginInfo))}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>

    );
}

export default LoginComponent;