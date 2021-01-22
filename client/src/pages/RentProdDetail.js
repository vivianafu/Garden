import React, { useState, useEffect } from 'react'
import '../components/ProdCardRent/ProductCardRent.scss'
import ProdHeaderL from '../components/ProdHeader/ProdHeaderL'
import ProdBreadcrumbs from '../components/ProdBreadcrumbs/ProdBreadcrumbs'
import ProductCardRent from '../components/ProdCardRent/ProductCardRent'
import ProdDetail from '../components/ProdDetail/ProdDetail'
import ProdCardSm from '../components/ProdCardSm/ProdCardSm'
import { withRouter,useParams } from 'react-router-dom'
import axios from 'axios'
import { devUrl } from '../config/index'



function RentProdDetail(props) {
  let {id} =useParams()
  console.log(id)
  let member_id = 1
  // let url =  `http://localhost:3001/products/get/${id}`  //not login

  let url =  `http://localhost:3001/products/get/${id}/` + member_id //login
  const[prod,setProd] =useState([])   
  useEffect(() =>{
    axios.get(url)
    .then((response)=>{
      // console.log(response)
      //把預設值傳到下一層
      setProd(response.data)})
    .catch((err)=> console.log(err))
  },[])
  console.log(id)
  // console.log(prod);
  // console.log(props);

  return (
    <>
      <ProdHeaderL />
      <ProdBreadcrumbs 
        value={prod}
      />
      <ProductCardRent 
        value={prod}
      />
           
      <ProdDetail 
        value={prod}
      />
      <ProdCardSm 
        category={prod.product_category}
      />
    </>
  )
}

export default RentProdDetail
