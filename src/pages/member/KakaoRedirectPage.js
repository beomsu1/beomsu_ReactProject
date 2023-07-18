import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { requestLogin } from "../../reducers/loginSlice";
// import { getAccessToken, getUserEmail } from "../../api/kakaoAPI";

const KakaoRedirectPage = () => {

    const [searchParams] = useSearchParams()

    // 'code' 라는 파람을 가져와야해 .get 사용
    // 인가 코드 발급
    const autoCode = searchParams.get('code')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    //값이 바뀔떄 마다 토큰 가져오기
    useEffect(() => {

        // 서버로 호출해서 작업
        axios.get(`http://localhost:8080/api/member/kakao?code=${autoCode}`).then(res =>{
            console.log(res.data)

            const memberInfo = res.data

            const nickname = memberInfo.nickname

            // dispatch는 비동기함수라 then 사용가능
            dispatch(requestLogin(memberInfo))
            alert("로그인 성공")

            // 만약 회원가입이 되어있지 않은 사람이면 modify페이지로 보내기
            if(nickname === 'SOCIAL_MEMBER'){
                navigate("/member/modify")

            // 회원가입이 되어있다면 메인페이지로 보내자
            } else{
                navigate("/")
            }
           
        })

        // 비동기 함수 리턴이 accessToken
        // getAccessToken(autoCode).then(accessToken => {
        //     console.log(accessToken)

        //     // getUserEmail은 accesstoken을 파라미터로 받음
        //     getUserEmail(accessToken).then(email => {
        //         console.log(email)
        //     })
        // })

    }, [autoCode])

    return (
        <div>
            {autoCode}
        </div>
    );
}

export default KakaoRedirectPage;