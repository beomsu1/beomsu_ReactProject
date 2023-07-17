import { useDispatch } from "react-redux";
import { dec, inc } from "../../reducers/countSlice";

const CountButton = () => {

    const dispatch = useDispatch()

    const handleClickInc = () => {
        // inc함수 호출
        dispatch(inc(2 , "inc"))
    }

    const handleClickDec = () => {
        // dec함수 호출
        dispatch(dec(2, "dec"))
    }

    return ( 
        <div>
            <button onClick={handleClickInc}>INC</button>
            <button onClick={handleClickDec}>DEC</button>
        </div>
     );
}
 
export default CountButton;