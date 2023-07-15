import ListComponent from "../../components/products/ListComponent";
import useQueryObj from "../../hooks/useQueryObj";

const Listpage = () => {

    // Custom hooks 사용
    const {queryObj , setSearch , moveRead , moveList} = useQueryObj()

        // 페이지 넘어가는 함수
        const movePage= (num) => {
            console.log(num)
            
            // 가져온 num 값으로 페이지를 변경하는 상태로 변경하자
            queryObj.page = num
            setSearch({...queryObj})
        }

    return ( 
        <div>
            Product List Page
            <ListComponent queryObj={queryObj} movePage={movePage} moveRead={moveRead}></ListComponent>
        </div>
     );
}
 
export default Listpage;