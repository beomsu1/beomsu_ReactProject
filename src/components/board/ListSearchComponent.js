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
        <div className="mb-7 w-2/5 p-4 bg-blue-100 border-2 border-blue-300 rounded-md">
        <select
          className="border p-2 m-1 rounded"
          value={searchObj.type}
          onChange={(e) => {
            searchObj.type = e.target.value;
            setSearchObj({ ...searchObj });
          }}
        >
          <option value={''}>---</option>
          <option value={'t'}>제목</option>
          <option value={'c'}>내용</option>
          <option value={'w'}>작성자</option>
          <option value={'tc'}>제목+내용</option>
          <option value={'tcw'}>제목+내용+작성자</option>
        </select>
        <input
          type="text"
          className="border p-2 m-1 rounded"
          value={searchObj.keyword}
          onChange={(e) => {
            searchObj.keyword = e.target.value;
            setSearchObj({ ...searchObj });
          }}
        />
        <select
          className="border p-2 m-1 rounded"
          value={searchObj.size}
          onChange={(e) => {
            searchObj.size = e.target.value;
            setSearchObj({ ...searchObj });
          }}
        >
          <option value={5}>5개</option>
          <option value={10}>10개</option>
          <option value={15}>15개</option>
          <option value={20}>20개</option>
        </select>
        <button
          className="border-2 border-blue-500 p-2 rounded text-blue-500 ml-7"
          onClick={() => {
            moveSearch(searchObj.type, searchObj.keyword, searchObj.size);
          }}
        >
          SEARCH
        </button>
      </div>
      
     );
}
 
export default ListSearchComponent;