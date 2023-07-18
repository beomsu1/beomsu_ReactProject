import { useEffect, useState } from "react";
import { postReply } from "../../api/repliesAPI";

const initState = {
    bno: 0,
    replyText: '',
    replyFile: '',
    replyer: ''
}



const ReplyInput = ({ bno, refreshLast }) => {

    // 오류 안나게 끔 초기 값 설정
    const [reply, setReply] = useState({ ...initState })


    // 이벤트 생성
    const handleChange = (e) => {

        // < input name="username"/> e.terget.name = username이 됨
        // value = "john" -> e.target.value = john 
        reply[e.target.name] = e.target.value
        setReply({ ...reply })
    }

    const handleClickRegister = (e) => {

        // bno 수집
        reply.bno = bno

        // data -> {result:233}
        postReply(reply).then(data => {

            console.log(data)

            alert(`${data.result}번이 등록되었습니다.`)

            refreshLast()

            // 상태를 껍데기로 업데이트
            setReply({ ...initState })
        })
    }


    return (
        <div className="m-8 bg-blue-100 border-2 p-4 rounded-lg">
            <h2 className="text-gray-800 text-2xl font-bold mb-4">Reply Input</h2>
            <input
                type="text"
                name="replyer"
                value={reply.replyer}
                onChange={handleChange}
                className="border p-2 rounded mr-4"
                placeholder="작성자를 입력해주세요."
            />
            <input
                type="text"
                name="replyText"
                value={reply.replyText}
                onChange={handleChange}
                className="border p-2 rounded w-2/5 mr-2"
                placeholder="댓글을 입력해주세요."
            />

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleClickRegister}
            >
                Register
            </button>
        </div>

    );
}

export default ReplyInput;