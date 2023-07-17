import { useNavigate } from "react-router-dom";
import RegisterComponent from "../../components/products/RegisterComponent";

const RegisterPage = () => {

    const navigate = useNavigate()

    const moveList = () => {
        navigate("../list")
    }


    return ( 
        <div>
            <RegisterComponent moveList={moveList}></RegisterComponent>
        </div>
     );
}
 
export default RegisterPage;