import { useEffect, useState } from "react"

const ListSearchComponent = ({queryObj ,moveSearch}) => {

    // setTimeout(() => {
    //     moveSearch('t','1')
    // },2000)

    // console.log("-------")

    // ListPage에서 만든 moveSerach에서 queryObj 상태가 계속 변경되기에 확인
    // console.log(queryObj)

    // 기본 값 설정
    const [searchObj , setSearchObj] = useState({size: 10 , type : '' , keyword : ''})

    // useEffect
    useEffect(() => {
        if (queryObj) {
          const newSearchObj = {
            size: queryObj.size || 10,
            type: queryObj.type || '',
            keyword: queryObj.keyword || '',
          };
      
          setSearchObj(newSearchObj);
        }
      }, [queryObj]);


    return ( 
        <div className="m-4 p-4 bg-purple-300 border-2">
            <select className="border-1 m-2 p-2"
            value={searchObj.type}
            onChange={(e) => {
                
                // 누른 value 값을 search.type에 넣어
                searchObj.type = e.target.value
                
                // 상태 업데이트
                setSearchObj({...searchObj})
            }}
            >
                <option value={''}>---</option>
                <option value={'t'}>제목</option>
                <option value={'c'}>내용</option>
                <option value={'w'}>작성자</option>
                <option value={'tc'}>제목+내용</option>
                <option value={'tcw'}>제목+내용+작성자</option>

            </select>
            <input type="text" className="border-1 m-2 p-2"
            value={searchObj.keyword}
            onChange={(e) => {
                
                // 누른 value 값을 search.keyword에 넣어
                searchObj.keyword = e.target.value
                
                // 상태 업데이트
                setSearchObj({...searchObj})
            }}
                ></input>

            <select
                value={searchObj.size}
                 onChange={(e) => {
                                
                // 누른 value 값을 search.size 넣어
                searchObj.size = e.target.value
                                
                // 상태 업데이트
                setSearchObj({...searchObj})
            }}
                >
                    <option value={5}>5개</option>
                    <option value={10}>10개</option>
                    <option value={15}>15개</option>
                    <option value={20}>20개</option>
                </select>

            <button className="border-2 m-2 p-2"
            onClick={()=>{
                moveSearch(searchObj.type,searchObj.keyword,searchObj.size)
            }}
            >SEARCH</button>
        </div>
     );
}
 
export default ListSearchComponent;