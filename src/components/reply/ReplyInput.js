import { useEffect, useState } from "react";
import { postReply } from "../../api/repliesAPI";

const initState = {
    bno : 0,
    replyText : '',
    replyFile : '',
    replyer : ''
}



const ReplyInput = ({bno , refreshLast}) => {

    // 오류 안나게 끔 초기 값 설정
    const[reply , setReply] = useState({...initState})


    // 이벤트 생성
    const handleChange = (e) => {
        
        // < input name="username"/> e.terget.name = username이 됨
        // value = "john" -> e.target.value = john 
        reply[e.target.name] = e.target.value
        setReply({...reply})
    }

    const handleClickRegister = (e) => {
        
        // bno 수집
        reply.bno = bno

        // data -> {result:233}
        postReply(reply).then(data =>{

            console.log(data)

            alert(`${data.result}번이 등록되었습니다.`)

            refreshLast()

            // 상태를 껍데기로 업데이트
            setReply({...initState})
        })
    }


    return ( 
        <div className="m-8 bg-yellow-200 border-2" >
            <div>Reply Input</div>
            <div className="m-2">
                <input type="text" name="replyText" value={reply.replyText} onChange={handleChange}></input>
            </div>
            <div className="m-2">
                <input type="text" name="replyer" value={reply.replyer} onChange={handleChange}></input>
            </div>
            <div className="m-2">
                <button
                onClick={handleClickRegister}
                >Register</button>
            </div>
        </div>
     );
}
 
export default ReplyInput;