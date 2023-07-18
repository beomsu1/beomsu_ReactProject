import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const useCustomLogin = (fn) => {


    const loginInfo = useSelector(state => state.login)

    // 이동기능
    const navigate = useNavigate()

    // signed가 바뀌면 실행
    useEffect(() => {

        if (fn) {
            if (!loginInfo.email) {
                fn(navigate)
                return
            }
        }

        // signed가 false면 loginpage로
        if (!loginInfo.email) {
            navigate(`/member/login`)
            return
        }


    }, [loginInfo.email])

    return { loginInfo }
}

export default useCustomLogin;