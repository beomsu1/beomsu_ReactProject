import axios from "axios"
import { createSearchParams } from "react-router-dom"

export const postProduct = async(FormData) => {

    const header = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }

    const res = await axios.post(`http://localhost:8080/api/products/`, FormData , header)

    return res.data

}

export const getList = async(queryObj) => {

    // queryObj를 URL 쿼리 문자열로 변환한 후 문자열로 저장
    const queryString = createSearchParams(queryObj)
    
    // QueryString을 axios.get 메소드 요청 URL 파라미터로 사용
    const res = await axios.get(`http://localhost:8080/api/products/list?${queryString}`)

    return res.data
}

export const getProduct = async(pno) => {

    const res = await axios.get(`http://localhost:8080/api/products/read?${pno}`)

    return res.data

}