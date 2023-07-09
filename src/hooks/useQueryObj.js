// Custom Hooks

// 공통적으로 사용하는 함수들을 빼서 재사용률을 높이자!


import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"


const checkNull = (obj) => {

    const result = {}
  
    for (const attr in obj) {
      const attrName = attr
      const attrValue = obj[attr]
  
      if( attrValue && attrValue !== 'null'){
        result[attrName] = attrValue
      }
    }
  
    return result
  }

const useQueryObj = () => {

    // 경로를 인수로 받아 해당 경로로 이동하는 역할
    const navigate = useNavigate()

    const [search , setSearch] = useSearchParams()

    console.info(search)
    
    const page = search.get("page") || 1
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")

    const queryObj = checkNull({page,size,type,keyword})

    const moveList = () => {

        // 쿼리스트링 만들기 
        const queryString = createSearchParams(queryObj)

        navigate(`../list/?${queryString}`)
    }

    const moveRead = (bno) => {

        console.log("moveRead: " + bno)

        // 쿼리스트링까지 넘어가지는 확인해보기
        const queryString = createSearchParams(queryObj)

        // 쿼리스트링 까지 포함한 주소
        navigate(`../read/${bno}?${queryString}`)
    }


    return {queryObj , setSearch , moveRead , moveList}

}

export default useQueryObj