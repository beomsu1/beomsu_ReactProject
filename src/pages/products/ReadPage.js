import { useParams } from "react-router-dom"
import useQueryObj from "../../hooks/useQueryObj"

const ReadPage = () => {

    const {queryObj , setSearch , moveRead, moveList} = useQueryObj()

    // params.bno를 구조분해 할당 한것
    const {pno} = useParams()

    console.log(pno)
    console.log(queryObj)


    return ( 
        <div>
            {pno}
        </div>
     );
}
 
export default ReadPage;