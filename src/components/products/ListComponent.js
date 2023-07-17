import { useEffect, useState } from "react";
import { getList } from "../../api/ProductsAPI";
import ListPageComponent from "../board/common/ListPageComponent";

// PageResponseDTO
const initState = {
  dtoList: [],
  end: 0,
  start: 0,
  next: false,
  prev: false,
  pageNums: [], // 배열로 해야 반복문 처리 편리  
  page: 0,
  size: 0,
  requestDTO: null
}


const ListComponent = ({ queryObj, movePage, moveRead }) => {

  const [listData, setListData] = useState(initState) // 오류 안 나게 초기값을 설정

  useEffect(() => {

    getList(queryObj).then(data => {
      console.log(data)
      setListData(data)
    })

    // queryObj 안에 저장되어있는 친구들중에 하나라도 바뀌면 바뀌게끔
  }, [queryObj])



  return (
    <div>
      <div className="bg-gray-100 py-4">
        <h1 className="text-3xl font-bold mb-4 text-blue-500 text-center">Product List</h1>
        <ul className="flex flex-wrap justify-center">
          {listData.dtoList.map((dto) => (
            <li
              key={dto.pno}
              onClick={() => moveRead(dto.pno)}
              className="w-1/6 mx-2 my-4 cursor-pointer bg-white rounded-lg shadow-md p-4"
            >
              <div className="text-center">
                <div className="font-bold text-lg mb-2">{dto.pno}</div>
                <div className="flex justify-center mb-4">
                  <img src={`http://localhost/s_${dto.fname}`} alt="Product" className="w-2/3" />
                </div>
                <div className="font-bold text-blue-500">
                  상품: {dto.pname}
                </div>
                <div className="text-gray-500">
                  가격: {dto.price}원
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>



      <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>

    </div>
  );
}

export default ListComponent;