import axios from "axios";
import { getCookie, setCookie } from "./cookieUtil";

// 인터셉터하는 기능 추가 
// 기존 Axios 인스턴스의 설정을 기반으로 새로운 인스턴스를 만들 수 있다.
const jwtAxios = axios.create()

// request 성공
const beforeReq = (config) => {

    console.log("beforeRequest.................")

    // 쿠키에서 엑세스 토큰 찾기
    const {accessToken}  = getCookie("login")

    // 엑세스 토큰이 없으면 프로미스 만들어서 반환시키기
    if(!accessToken){
        throw new Error("NO ACCESS TOKEN")
    }
    
    // config에 헤더를 추가해서 보내자
    config.headers.Authorization = `Bearer ${accessToken}`

    return config
}

// requset실패
const requestFail = (err) => {

    console.log("request fail..............")

    return Promise.reject(err)
}

// response 성공
const beforeRes = async(res) => {

    console.log("2xx Response.............")

    // error 가 만료된 에러
    if(res.data.error === 'Expired'){

        console.log("Access Token has expired")

        // 비동기처리
        const newAccessToken = await refreshJWT()

        // 원래 요청을 하자! - res.config가 원래 요청
        const originalRequest = res.config

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

        return await axios(originalRequest)
    }

    return res

}

const refreshJWT = async () => {

    // 쿠키에 있는 토큰 가져오기
    const cookieValue = getCookie("login")

    // 파라미터를 access , refresh를 줘야하는데 엑세스는 헤더에서 주기에 파라미터에 refresh만 보냄
    const {accessToken, refreshToken} = cookieValue

    const header = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }

    const res = await axios.get(`http://localhost:8080/api/member/refresh?refreshToken=${refreshToken}`, header)

    const newAccess = res.data.accessToken
    const newRefresh = res.data.refreshToken

    console.log("--------------------------------")
    console.log("new access :" + newAccess )
    console.log("new refresh :" + newRefresh)


    cookieValue.accessToken = newAccess
    cookieValue.refreshToken = newRefresh
    console.log("--------------------------------")
    console.log(cookieValue)

    // 쿠키에 저장 
    setCookie("login", JSON.stringify(cookieValue), 1)

    return newAccess

}


// response 실패
const responseFail  = (err) => {
    console.log("response fail...........")


    return Promise.reject(err)
}

// 지금부터 jwtAxios interceptros . request할 때는 use ( beforeReq , requsetFail)을 사용할 거다.
jwtAxios.interceptors.request.use(beforeReq, requestFail)
jwtAxios.interceptors.response.use(beforeRes, responseFail)

export default jwtAxios
