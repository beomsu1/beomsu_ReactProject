import { Cookies } from "react-cookie";

// 쿠키는 문자열만사용
const cookies = new Cookies()

// 쿠키의 기본값은 이름 , 값 + 옵션
export const setCookie = (cookieName , value , days) => {

    // expries : 만료
    const expires = new Date()
    expires.setUTCDate(expires.getUTCDate+days)

    // 쿠키를 저장할 떄 옵션이 들어감 옵션에는 : 이름 , 값 , 옵션
    // path : 쿠키를 저장하는 경로 ( 전체경로를 사용할 때는 /만 사용)
    cookies.set(cookieName , value , {path: "/" , expires:expires})

}

// 쿠키 가져오기
export const getCookie = (cookieName) => {

    return cookies.get(cookieName)
}

// 쿠키 삭제하기
export const removeCookie = (cookieName , path="/") => {

    // remove도 파라미터 2개
    cookies.remove(cookieName,{path:path})
}