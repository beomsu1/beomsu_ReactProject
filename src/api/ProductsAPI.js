import { createSearchParams } from "react-router-dom"
import jwtAxios from "../util/jwtUtil"

export const postProduct = async(FormData) => {

    const header = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }

    const res = await jwtAxios.post(`http://localhost:8080/api/products/`, FormData , header)

    return res.data

}

export const getList = async(queryObj) => {

    // queryObj를 URL 쿼리 문자열로 변환한 후 문자열로 저장
    const queryString = createSearchParams(queryObj)
    
    // QueryString을 axios.get 메소드 요청 URL 파라미터로 사용
    const res = await jwtAxios.get(`http://localhost:8080/api/products/list?${queryString}`)

    return res.data
}

export const getProduct = async(pno) => {

    const res = await jwtAxios.get(`http://localhost:8080/api/products/${pno}`)

    return res.data

}

export const deleteProduct = async(pno) => {

    const res = await jwtAxios.delete(`http://localhost:8080/api/products/${pno}`)

    return res.data
}

export const putProduct = async(FormData) => {

    const header = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }

    const res = await jwtAxios.post(`http://localhost:8080/api/products/modify`, FormData , header)

    return res.data
}