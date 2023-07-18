import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cartnav from "./CartNav";


const LoginNav = () => {

    // 구조분해할당
    const {email,nickname} = useSelector(state => state.login)

    console.log("LoginNav........." , email)

    // 이메일이 ''이 아닐떄만 CartNav가 보여지게
    if(email !== ''){
        return (
        <div>
            <div>
                {email} - {nickname}
                <Cartnav></Cartnav>
            </div>
        </div>
        )
    }

    return (
        <div>
            <div>
                <Link to="/member/login">LOGIN</Link>
            </div>
        </div>
    );
}
 
export default LoginNav;