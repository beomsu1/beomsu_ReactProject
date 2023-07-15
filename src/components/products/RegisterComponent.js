import { useRef, useState } from "react"
import { postProduct } from "../../api/ProductsAPI"

// 껍데기 생성
const initState = {
  pname : '',
  pdesc : '',
  price : ''
}


const RegisterComponent = ({moveList}) => {

  // 참조값 물기
  const fileRef = useRef()
    
  // 오류 안뜨게 끔 설정
  const [product , setProduct] = useState({...initState})

  // change 함수 생성
  const handleChange = (e) => {
      product[e.target.name] = e.target.value
      setProduct({...product})
  }

  // save 함수 생성
  const handleClickSave = (e) => {
      
      const formData = new FormData();

      // 하나씩 담아줘여함
      formData.append("pname", product.pname)
      formData.append("pdesc", product.pdesc)
      formData.append("price", product.price)

      console.dir(fileRef.current)

      const arr = fileRef.current.files
      
      for(let file of arr) {
          formData.append("files", file)
      }

      postProduct(formData).then(data => {
        const rno = data.result 
        alert(`${rno}번 상품이 등록되었습니다.`)
        moveList()
      })

  }

  // clear 함수 생성
  const handleClickClear = (e) => {
      fileRef.current.value=''
  }


    return ( 
        <div>
            <h1>Product Input</h1>
            <div className="border-2 m-2 p-2">
                <input type="text" name="pname" value={product.pname} onChange={handleChange}
                placeholder="Name"
                ></input>
            </div>
            <div className="border-2 m-2 p-2">
                <input type="text" name="pdesc" value={product.pdesc} onChange={handleChange}
                placeholder="Description"
                ></input>
            </div>
            <div className="border-2 m-2 p-2">
                <input type="number" name="price" value={product.price} onChange={handleChange}
                placeholder="Price"
                ></input>
            </div>
            <div className="border-2 m-2 p-2">
                <input type="file" multiple name="images" onChange={handleChange} ref={fileRef}></input>
            </div>
            <div>
                <button onClick={handleClickSave} className="border-2 m-2 p-2">SAVE</button>
                <button onClick={handleClickClear} className="border-2 m-2 p-2">CLEAR</button>
            </div>
        </div>
     );
}
 
export default RegisterComponent;