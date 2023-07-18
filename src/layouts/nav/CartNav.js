import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../../reducers/cartSlice";

const Cartnav = () => {

    // state.cart에 있는 변수 가져오기
    const {items} = useSelector(state => state.cart)

    // state.login에 있는 변수들 가져오기
    const {email, nickname} = useSelector(state => state.login)
    
    const dispatch = useDispatch()

    // 이메일이 바뀌었다면 리렌더링
    useEffect(()=>{

        // 이메일이 존재하지 않으면 리턴
        if(!email){
            return
        }

        dispatch(getCartThunk(email))

    },[email])


    return ( 
        <div className="text-3xl font-extrabold text-pink-400">
            Cart {items.length}
        </div>
     );
}
 
export default Cartnav;