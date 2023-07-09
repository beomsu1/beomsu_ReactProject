import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import ListComponent from "../../components/board/ListComponent";
import ListSearchComponent from "../../components/board/ListSearchComponent";
import useQueryObj from "../../hooks/useQueryObj";


const ListPage = () => {

    const {queryObj , setSearch , moveRead} = useQueryObj()

    // 페이지 넘어가는 함수
    const movePage= (num) => {
        console.log(num)
        
        // 가져온 num 값으로 페이지를 변경하는 상태로 변경하자
        queryObj.page = num
        setSearch({...queryObj})
    }

    const moveSearch = (type,keyword,size) => {

        // 페이지 기본값 1
        queryObj.page = 1;
        queryObj.size = size;
        queryObj.type = type
        queryObj.keyword = keyword
        
        console.log(queryObj)

        // 받은 값들을 업데이트
        setSearch({...queryObj})
    }






    return ( 
        <div>
            Board List Page
            <ListSearchComponent queryObj={queryObj} moveSearch={moveSearch} ></ListSearchComponent>
            <ListComponent queryObj={queryObj} movePage={movePage} moveRead={moveRead}></ListComponent>
        </div>
     );
}
 
export default ListPage;