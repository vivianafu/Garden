import React from 'react'
import ProductCardRent from '../components/ProdCardRent/ProductCardRent'
import ProdHeader from '../components/ProdHeader/ProdHeader'
import ProdDetail from '../components/ProdDetail/ProdDetail'
import ProdCardSm from '../components/ProdCardSm/ProdCardSm'
import VBreadCrumbs from '../components/VBreadCrumbs/VBreadCrumbs'
import { Link } from 'react-router-dom'
import data from '../data'
import { withRouter } from 'react-router-dom'

function RentProdDetail(props) {
  console.log(props)
  return (
    <>
      <ProdHeader />
      <VBreadCrumbs />
      <ProductCardRent />
      <ProdDetail />
      <ProdCardSm />
    </>
  )
}

export default withRouter(RentProdDetail)
