import LoginComponent from "../../components/member/LoginComponent";
import BasicLayout from "../../layouts/BasicLayout";

const LoginPage = () => {
    return ( 
        <BasicLayout>
            <div>Login Page</div>
            <LoginComponent></LoginComponent>
        </BasicLayout>
     );
}
 
export default LoginPage;