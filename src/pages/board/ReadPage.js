import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/read/ReadComponent";
import ReplyWrapper from "../../components/reply/ReplyWrapper";

const ReadPage = () => {

    const {queryObj , moveList} = useQueryObj()

    // params.bno를 구조분해 할당 한것
    const {bno} = useParams()

    console.log(bno)
    console.log(queryObj)

    return ( 
        <>
        <div>
            Board Read Page

            <ReplyWrapper bno={bno}></ReplyWrapper>
            <ReadComponent bno={bno}></ReadComponent>
        </div>
        <div>
            <button onClick={(e) => moveList()}>List</button>
        </div>
        </>
     );
}
 
export default ReadPage;