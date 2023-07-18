import KakaoLoginComponent from "../../components/member/KakaoLoginComponent";
import LoginComponent from "../../components/member/LoginComponent";
import BasicLayout from "../../layouts/BasicLayout";

const LoginPage = () => {
    return ( 
        <BasicLayout>
            <div>Login Page</div>
            <LoginComponent></LoginComponent>
            <KakaoLoginComponent></KakaoLoginComponent>
        </BasicLayout>
     );
}
 
export default LoginPage;