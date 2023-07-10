import { useEffect, useState } from "react";
import { getRepliesOfBoard } from "../../api/repliesAPI";
import ListPageComponent from "../board/common/ListPageComponent";

// PageResponseDTO타입 껍데기
const initState = {
    dtoList: [],
    end: 0,
    start: 0,
    prev: false,
    next: false,
    pageNums: [],
    page: 0,
    size: 0,
    requestDTO: null
}

const ReplyList = ({ bno, page, last, movePage , refresh , changeCurrent}) => {

    // 오류가 안나게 끔 기본 값 설정
    const [listData, setListData] = useState(initState)

    console.log("Reply List.. bno: " + bno)

    // bno가 바뀌면 rerender
    // 댓글 가져오는 axios
    useEffect(() => {
        getRepliesOfBoard(bno, page, last).then(data => {
            console.log(data)

            // data로 상태 업데이트하기 data->PageReponseDTO 타입
            setListData(data)
        })
    }, [bno , page , last , refresh])

    return (
        <div>
            <div>
                ReplyList
            </div>
            <div>
                <ul>
                    {listData.dtoList.map(reply => <li key={reply.rno}
                    onClick={()=>changeCurrent(reply.rno)}
                    >{reply.rno} - {reply.replyText}</li>)}
                </ul>
                <ListPageComponent {...listData} movePage={movePage}></ListPageComponent>
            </div>
        </div>
    );
}

export default ReplyList;