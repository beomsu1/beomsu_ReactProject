import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/BoardAPI";
import { useEffect, useState } from "react";

// 껍데기 만들기
const initState = {
    dtoList : [],
    end : 0,
    start : 0,
    next : false,
    prev : false,
    pageNums : [], // 배열로 생성해야 반복문 처리하기가 편리
    page : 0,
    size : 0,
    requestDTO : null
}

const ListComponent = ({queryObj , movePage}) => {

    // 기본 상태 초기값 만들기
    const [listData , setListData] = useState(initState)
    

    // queryObj를 기반으로 검색 파라미터 생성하는 역할?
    console.log(createSearchParams(queryObj).toString)

    useEffect(() => {

        getList(queryObj).then(data =>{
            console.log(data)

            // 받은 데이터로 listData 상태 변경하기
            setListData(data)

        })

        // queryObj를 의존
    },[queryObj])

    const handleClickPage = (pageNum) => {
        movePage(pageNum)
    }

    return ( 
        <div>
            <div>ListComponent</div>
            <div>
                <ul>
                    {listData.dtoList.map(({bno,title,writer,replyCount}) => <li key={bno}>{bno} - {title} - {writer} - {replyCount}</li>)}
                </ul>
            </div>

            {/* 페이지 버튼 만들기 */}
            <div >
                <ul className="flex">
                    {listData.prev ? <li className="m-2 underline"
                    onClick={() => handleClickPage(listData.start-1)}
                    >PREV</li> : <></>}

                    {listData.pageNums.map(num => <li key={num} className="m-2 underline "
                    onClick={() => handleClickPage(num)}
                    >{num}</li>)}

                    {listData.next ? <li className="m-2 underline"
                    onClick={() => handleClickPage(listData.end+1)}
                    >NEXT</li> : <></>}
                </ul>
            </div>
        </div>
     );
}
 
export default ListComponent;