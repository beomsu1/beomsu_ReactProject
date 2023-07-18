import { useEffect, useState } from "react";
import { getProduct } from "../../api/ProductsAPI";
import { useDispatch, useSelector } from "react-redux";
import { addCartThunk } from "../../reducers/cartSlice";

// 껍데기
const initState = {
  pno: 0,
  pname: '',
  price: 0,
  pdesc: '',
  images: []
}

const ReadComponent = ({ pno, moveList, moveModify }) => {

  const [product, setProduct] = useState(initState)

  // state.login에 있는 email 가져오기
  const { email } = useSelector(state => state.login)

  const dispatch = useDispatch()

  useEffect(() => {

    getProduct(pno).then(data => {
      setProduct(data)
      // 예외처리
    }).catch(e => {
      console.log(e)
      moveList()
    })

  }, [pno])

  return (
    <div className="bg-white p-4 border-2">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Product Read</h1>
      <div className="mb-4 border-b-2 border-blue-500 rounded-lg shadow-sm pb-2 ">{product.pname}</div>
      <div className="mb-4 border-b-2 border-blue-500 rounded-lg shadow-sm pb-2">{product.pdesc}</div>
      <div className="mb-4 border-b-2 border-blue-500 rounded-lg shadow-sm pb-2">{product.price}원</div>
      <div>
        <ul>
          {product.images.map((fname, idx) => (
            <li key={idx}>
              <img src={`http://localhost/${fname}`} alt="Product" />
            </li>
          ))}
        </ul>
        <div className="flex">
          <button className="m-2 p-2 border-2 border-blue-500 text-blue-500 rounded-lg"
            onClick={() => {
              dispatch(addCartThunk({email,pno}))
            }}>
            AddCart
          </button>
          <button className="m-2 p-2 border-2 border-blue-500 text-blue-500 rounded-lg" onClick={moveList}>
            List
          </button>
          <button className="m-2 p-2 border-2 border-blue-500 text-blue-500 rounded-lg" onClick={() => moveModify(product.pno)}>
            Modify
          </button>
        </div>
      </div>
    </div>

  );
}

export default ReadComponent;