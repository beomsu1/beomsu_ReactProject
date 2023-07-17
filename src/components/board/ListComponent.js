import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/BoardAPI";
import { useEffect, useState } from "react";
import ListPageComponent from "./common/ListPageComponent";

// 껍데기 만들기
const initState = {
    dtoList: [],
    end: 0,
    start: 0,
    next: false,
    prev: false,
    pageNums: [], // 배열로 생성해야 반복문 처리하기가 편리
    page: 0,
    size: 0,
    requestDTO: null
}

const ListComponent = ({ queryObj, movePage, moveRead }) => {

    // 기본 상태 초기값 만들기
    const [listData, setListData] = useState(initState)


    // queryObj를 기반으로 검색 파라미터 생성하는 역할?
    console.log(createSearchParams(queryObj).toString)

    useEffect(() => {

        getList(queryObj).then(data => {
            console.log(data)

            // 받은 데이터로 listData 상태 변경하기
            setListData(data)

        })

        // queryObj를 의존
    }, [queryObj])



    return (
        <div className="bg-white">
            <div className="font-extrabold text-lg m-2 p-2">게시물 목록</div>
            <div>
                <ul>
                    {listData.dtoList.map(({ bno, title, writer, replyCount }) => (
                        <li
                            key={bno}
                            onClick={() => moveRead(bno)}
                            className="cursor-pointer border border-gray-300 rounded-md shadow-md p-4 my-4 bg-gradient-to-r from-blue-100 to-blue-200"
                        >
                            <div className="text-blue-700 font-semibold mb-2">{bno}</div>
                            <div className="text-blue-900 mb-2">{title}</div>
                            <div className="text-gray-500 mb-2">{writer}</div>
                            <div className="text-gray-500">{replyCount} replies</div>
                        </li>
                    ))}
                </ul>
            </div>

            <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>
        </div>

    );
}

export default ListComponent;