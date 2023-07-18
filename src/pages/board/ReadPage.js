import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/read/ReadComponent";
import ReplyWrapper from "../../components/reply/ReplyWrapper";
import { useParams } from "react-router-dom";

const ReadPage = () => {

    const {queryObj , moveList} = useQueryObj()

    // params.bno를 구조분해 할당 한것
    const {bno} = useParams()

    console.log(bno)
    console.log(queryObj)

    return ( 
        <>
        <div>
            <ReadComponent bno={bno}></ReadComponent>
            <ReplyWrapper bno={bno}></ReplyWrapper>
            
        </div>
        <div>
            <button className="border-2 m-2 p-2 text-blue-500" onClick={(e) => moveList()}>List</button>
        </div>
        </>
     );
}
 
export default ReadPage;