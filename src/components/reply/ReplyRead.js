import { useEffect, useState } from "react";
import { deleteReply, getReply, putReply } from "../../api/repliesAPI";

const initState = {
    rno: 0,
    bno: 0,
    replyText: '',
    replyFile: '',
    replyer: ''
}


const ReplyRead = ({ rno, cancelRead ,refreshPage }) => {

    const [reply, setReply] = useState(initState)

    useEffect(() => {

        getReply(rno).then(data => {
            console.log(data)
            setReply(data)
        })

    }, [rno])

    // 삭제 이벤트 생성
    const handleClickDelete = () => {
        
        deleteReply(rno).then(data => {
            alert(`${data.result}번 댓글이 삭제되었습니다.`)
            refreshPage(true)
        })
    }

    const handleChange = (e) => {
        reply[e.target.name] = e.target.value
        setReply({...reply})
    }

    if(reply.replyText === '해당 글은 삭제되었습니다.'){
        return <></>
    }

    // modify 눌렀을 떄 이벤트 처리
    const handleClickModify = () => {
        
        putReply(reply).then(data => {
            alert(`${data.result}번이 수정되었습니다.`)
            refreshPage(true)
        })
    }

    return (
        <div className="m-8 bg-blue-300">
            <div>Reply Read {rno}</div>
            <div>
                <div>{rno}</div>
                <div><input type="text" name="replyText" value={reply.replyText}
                onChange={handleChange}
                ></input></div>
                <div>{reply.replyer}</div>
            </div>
            <div className="m-2">
                <button className="m-4"
                onClick={handleClickModify}
                >MODIFY</button>
                <button className="m-4"
                onClick={handleClickDelete}
                >DELETE</button>
                <button className="m-4"
                    onClick={cancelRead}>CANCLE</button>

            </div>
        </div>

    );
}

export default ReplyRead;