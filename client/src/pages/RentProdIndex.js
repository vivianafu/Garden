import React,{useEffect, useState} from 'react'
import { withRouter,useParams,NavLink ,useLocation} from 'react-router-dom'
import ProdHeader from '../components/ProdHeader/ProdHeader'
import ProdBanner from '../components/ProdBanner/ProdBanner'
import ProdOccation from '../components/ProdOccation/ProdOccation'
import NineGrid from '../components/NineGrid/NineGrid'
import VScroll from '../components/VScroll/VScroll'
import ScrollTop from '../components/VScrollTop/VScrollTop'

function RentProdIndex(props) {
const [occa,setO] =useState("")

useEffect(()=>{
 if (occa)
  props.setOccasion(occa)
  // console.log(occa);
},[occa])

  return (
    <>
      <ProdHeader />
      <ProdBanner />
      <VScroll />
      <ProdOccation 
        setO={setO}/>
      <NineGrid />
      <ScrollTop />
    </>
  )
}

export default withRouter(RentProdIndex)
