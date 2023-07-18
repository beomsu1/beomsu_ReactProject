import axios from "axios"

const REST_KEY = 'be4e71b0c735074aa873a5f79819cd06'
const REDIRECT_URI ='http://localhost:3000/member/kakao'

// 엑세스 토큰 요청 경로
const AUTH_TOKEN_URL = 'https://kauth.kakao.com/oauth/token'

// 사용자 정보 가져오는 경로
const Kakao_User = 'https://kapi.kakao.com/v2/user/me'

// authCode - 인가 코드
export const getAccessToken = async(authCode) => {

    const header = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        }
    }

    const params = {
        grant_type : 'authorization_code',
        client_id : REST_KEY,
        redirect_uri : REDIRECT_URI,
        code : authCode
    }

    const res = await axios.post(AUTH_TOKEN_URL , params , header)
    
    // res.data 구조분해할당
    const {access_token} = res.data
    
    return access_token

}

// 사용자 정보 가져오기 (이메일)

export const getUserEmail = async(accessToken) => {

    const header = {
        headers: {
            "Authorization" : `Bearer ${accessToken}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        }
    }

    const res = await axios.get(Kakao_User, header)

    const {kakao_account} = res.data

    console.log(kakao_account)

    // account 에서 email 꺼내기
    return kakao_account.email

}