import { useEffect, useState } from "react";
import { deleteReply, getReply, putReply } from "../../api/repliesAPI";

const initState = {
    rno: 0,
    bno: 0,
    replyText: '',
    replyFile: '',
    replyer: ''
}


const ReplyRead = ({ rno, cancelRead, refreshPage }) => {

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
        setReply({ ...reply })
    }

    if (reply.replyText === '해당 글은 삭제되었습니다.') {
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
        <div className="m-12 bg-blue-100 p-4 rounded-lg">
            <h2 className="text-blue-500 text-2xl font-bold mb-4">Reply Read {rno}</h2>
            <div className="bg-white p-4 rounded-lg shadow mb-4">
                <div className="mb-2">No : {rno}</div>
                <div className="mb-2">
                    <input
                        type="text"
                        name="replyText"
                        value={reply.replyText}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    />
                </div>
                <div className="mb-4">Replyer: {reply.replyer}</div>
            </div>
            <div className="flex justify-end">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                    onClick={handleClickModify}
                >
                    MODIFY
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
                    onClick={handleClickDelete}
                >
                    DELETE
                </button>
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={cancelRead}
                >
                    CANCEL
                </button>
            </div>
        </div>


    );
}

export default ReplyRead;