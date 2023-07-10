import { useEffect, useState } from "react";
import ReplyList from "./ReplyList";
import ReplyInput from "./ReplyInput";
import ReplyRead from "./ReplyRead";

// 껍데기 시본 값
const initState = {
    bno: 0,
    page: 1,
    last: false,
    refresh : false,
    // current로 read페이지를 보여지게끔 만들어줄거임!
    current : 0
}

// 모든 reply는 bno를 받아야함
const ReplyWrapper = ({ bno }) => {

    // 오류가 나지 않게 기본 값 설정
    const [data, setData] = useState(initState)

    //bno 값이 달라지면 useEffect
    useEffect(() => {

        data.bno = bno
        data.page = 1
        data.last = true

        setData({ ...data })
    }, [bno])

    // 페이지를 변경하기 위해 movePage라는 함수 생성 num값으로 변경
    const movePage = (num) => {

        // page값을 받은 num으로 변경
        data.page = num
        data.last = false
        data.refresh = !data.refresh

        // 상태 업데이트
        setData({...data})
    }

    const refreshLast = () => {

        data.last = true
        data.refresh = !data.refresh
        setData({...data})
    }

    const changeCurrent = (rno) => {

        data.current = rno
        setData({...data})
    }

    // 리드 페이지 그만 보는 함수 current를 0으로 지정
    const cancelRead = () => {
        data.current = 0
        setData({...data})
    }

    // 강제로 refresh 변경 해서 rerender 시키기
    const refreshPage = (hide) => {
        data.refresh = !data.refresh
        
        if(hide){
            data.current = 0
        }
        
        
        setData({...data})


    }

    return (
        <div>
            <ReplyInput bno={bno} refreshLast={refreshLast}></ReplyInput>
            {data.current != 0 ? <ReplyRead rno={data.current} cancelRead={cancelRead} refreshPage={refreshPage}></ReplyRead> : <></>}
            <ReplyList {...data} movePage={movePage} changeCurrent={changeCurrent}></ReplyList>
        </div>
    );
}

export default ReplyWrapper;