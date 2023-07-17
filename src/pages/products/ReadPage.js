import { useParams } from "react-router-dom"
import useQueryObj from "../../hooks/useQueryObj"
import ReadComponent from "../../components/products/ReadComponent"
import useCustomLogin from "../../hooks/useCustomLogin"

const ReadPage = () => {

    const {queryObj , setSearch , moveRead, moveList , moveModify} = useQueryObj()

    // params.bno를 구조분해 할당 한것
    const {pno} = useParams()

    console.log(pno)
    console.log(queryObj)

    useCustomLogin(()=>{
        alert("로그인을 해주세요!")
    })


    return ( 
        <div>
            <ReadComponent pno={pno} moveList={moveList} moveModify={moveModify}></ReadComponent>
        </div>
     );
}
 
export default ReadPage;