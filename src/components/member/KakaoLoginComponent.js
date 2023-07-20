import { Link } from "react-router-dom";

const REST_KEY = 'be4e71b0c735074aa873a5f79819cd06'
const REDIRECT_URI ='http://localhost:3000/member/kakao'

//인가 코드 받는 URL
const KakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

const KakaoLoginComponent = () => {
    return ( 
        <button className="text-2xl w-1/6 bg-[#fef01b] text-black">
            <Link to={KakaoURL}>카카오 로그인</Link>
        </button>
     );
}
 
export default KakaoLoginComponent;