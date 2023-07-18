import { Link } from "react-router-dom";

const REST_KEY = 'be4e71b0c735074aa873a5f79819cd06'
const REDIRECT_URI ='http://localhost:3000/member/kakao'

//인가 코드 받는 URL
const KakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

const KakaoLoginComponent = () => {
    return ( 
        <div className="text-3xl text-yellow-200 font-extrabold">
            <Link to={KakaoURL}>Kakao Login</Link>
        </div>
     );
}
 
export default KakaoLoginComponent;