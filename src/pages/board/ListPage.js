import { useSearchParams } from "react-router-dom";
import ListComponent from "../../components/board/ListComponent";


    // null 로 들어오는 값들을 제거하자
    
    const checkNull = (obj) => {

        const result = {}

        for (const attr in obj) {

            const attrName = attr
            const attrValue = obj[attr]

            if( attrValue && attrValue !== null){
                result[attrName] = attrValue
            }
        
            
        }    return result
    }


const ListPage = () => {

    // URL의 query parameter를 읽고 조작하기 위해 필요한 상태와 함수를 가져오는 코드
    // search : 현재 query parameter 값을 나타내는 상태 변수
    // setSearch : URL 의 parameter를 업데이트
    const [search , setSearch] = useSearchParams()

    console.log(search)

    // page의 값을 안주면 기본값 1 출력
    const page = search.get("page") || 1
    // size의 값을 안주면 기본값 10 출력
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")

    const queryObj = checkNull({page,size,type,keyword})

    console.log(queryObj)

    // 페이지 넘어가는 함수
    const movePage= (num) => {
        console.log(num)
        
        // 가져온 num 값으로 페이지를 변경하는 상태로 변경하자
        queryObj.page = num
        setSearch({...queryObj})
    }




    return ( 
        <div>
            Board List Page<ListComponent queryObj={queryObj} movePage={movePage}></ListComponent>
        </div>
     );
}
 
export default ListPage;