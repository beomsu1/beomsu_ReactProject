import { useEffect, useRef, useState } from "react"
import { deleteProduct, getProduct, putProduct } from "../../api/ProductsAPI"

// 껍데기
const initState = {
  pno: 0,
  pname: '',
  pdesc: '',
  price: 0,
  images: []
}


const ModifyComponent = ({ pno, moveList, moveRead }) => {

  // 초기 값 설정
  const [product, setProduct] = useState(initState)

  // 참조값 물기
  const fileRef = useRef()

  useEffect(() => {

    getProduct(pno).then(data => {
      // data로 상태 업데이트
      setProduct(data)
    })

  }, [pno])

  const handleClickDelete = () => {

    deleteProduct(pno).then(data => {
      alert("상품 삭제되었습니다.")

    })
  }

  // change 함수 생성
  const handleChange = (e) => {
    product[e.target.name] = e.target.value
    setProduct({ ...product })
  }

  const handleClickModify = () => {


    const formData = new FormData();

    // 파일 데이터 추가
    // 하나씩 담아줘여함
    formData.append("pno", product.pno)
    formData.append("pname", product.pname)
    formData.append("pdesc", product.pdesc)
    formData.append("price", product.price)

    // 이미지 추가
    if (product.images) {
      for (let pi of product.images) {
        // images = DTO에 images
        formData.append("images", pi)

      }
    }

    const arr = fileRef.current.files

    for (let file of arr) {
      formData.append("files", file)
    }

    putProduct(formData).then(data => {
      console.log(data)
      alert("수정되었습니다.")
      moveRead(pno)
    })

  }

  const handleCLickDelImg = (fname) => {

    // 필터의 결과는 항상 배열
    const newArr = product.images.filter(ele => ele != fname)

    product.images = newArr

    setProduct({ ...product })

  }



  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-500 mb-4">Product Modify</h1>
      <div className=" m-2 p-2 border-b-2 border-blue-300 rounded-lg shadow-sm">
        {product.pno}번
      </div>
      <div className="m-2 p-2 border-b-2 border-blue-300 rounded-lg shadow-sm">
        <input type="text" name="pname" value={product.pname} onChange={handleChange} />
      </div>
      <div className="m-2 p-2 border-b-2 border-blue-300 rounded-lg shadow-sm">
        <input type="text" name="pdesc" value={product.pdesc} onChange={handleChange} />
      </div>
      <div className="m-2 p-2 border-b-2 border-blue-300 rounded-lg shadow-sm">
        <input type="number" name="price" value={product.price} onChange={handleChange} />
      </div>
      <div className="m-2 p-2 border-b-2 border-blue-300 rounded-lg shadow-sm">
        <input type="file" ref={fileRef} multiple name="images"></input>
      </div>
      <div className="m-2 p-2 border-2">
        <ul className="">
          {product.images.map((fname, idx) =>
            <li
              className="m-2"
              key={idx}>
              <img src={`http://localhost/s_${fname}`}></img>
              <button className="bg-red-400 rounded-md m-2 p-2 "
                onClick={() => handleCLickDelImg(fname)}
              >X</button>
            </li>)}
        </ul>

        <div>
          <button className="bg-pink-500 text-white px-4 py-2 mr-4 rounded-lg" 
          onClick={moveList}>
            List
          </button>
          <button className="bg-red-500 text-white px-4 py-2 mr-4 rounded-lg" 
          onClick={handleClickDelete}>
            Delete
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg"
           onClick={handleClickModify}>
            Modify
          </button>

        </div>
      </div>
    </div>
  );
}

export default ModifyComponent;