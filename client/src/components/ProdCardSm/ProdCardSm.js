import React, { useEffect, useState } from 'react'
import './ProdCardSm.scss'
import { NavLink } from 'react-router-dom'
// import { devUrl } from '../../config/index'
import axios from 'axios'

// 假資料
// import { prod } from '../../cardsmdata'


function ProdCardSm(props) {
  // console.log(props)

  //假資料測試
  // const [products, setProducts] = useState(prod.porducts)


  const[cat,setCat]=useState([])

  useEffect(()=>{
    axios.get(`http://localhost:3001/products/getr/${props.category}`)
    .then((response) =>{
      // console.log(response.data);
      setCat(response.data)
    })
    .catch(function(error){
      console.log(error)})
 
} ,[props.category])


  return (
 <>
      <div className="v-recommend-goods ">
        <div className="text-center">
          <h3>你可能會喜歡</h3>
          <h5>You May Also Like...</h5>
        </div>
        <div className="d-flex justify-content-center v-card-group">
          {cat.map((e) => (
            <figure key={e._id} className="v-product-card ml-0" onClick={()=>window.location.reload()}>
            <NavLink to={`/植物租賃/租賃商品/${e._id}`}>
              <img className="v-recommend-img" src={e.product_img} alt="" />
              <figcaption>
                <p>{e.product_name}</p>
              </figcaption>
              <p className="v-price">NT$ {e.product_price}/月</p>
              </NavLink>
            </figure>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProdCardSm
