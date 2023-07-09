import axios from "axios"
import { createSearchParams } from "react-router-dom"

export const getList = async(queryObj) => {

    // queryObj를 URL 쿼리 문자열로 변환한 후 문자열로 저장
    const queryString = createSearchParams(queryObj)
    
    // QueryString을 axios.get 메소드 요청 URL 파라미터로 사용
    const res = await axios.get(`http://localhost:8080/api/board/list?${queryString}`)

    return res.data
}