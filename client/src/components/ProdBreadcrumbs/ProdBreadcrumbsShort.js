import React from 'react'
import {NavLink} from 'react-router-dom'
import './ProdBreadcrumbs'

function ProdBreadcrumbsShort() {
  return (
    <>
        <nav  aria-label="breadcrumb">
            <ol className="breadcrumb m-0 v-ol" style={{background:"#fff" ,padding:"25px 120px"}}>
            <li className="breadcrumb-item active"><NavLink style={{color: "#494949"}} to="/">首頁</NavLink></li>
                <li className="breadcrumb-item active"><NavLink style={{color: "#494949"}} to="/植物租賃">植物租賃</NavLink></li>
                <li className="breadcrumb-item active"><NavLink style={{color: "#838383"}}  to="/植物租賃/租賃商品">租賃商品</NavLink></li>
            </ol>
        </nav>
    </>
  )
}


export default ProdBreadcrumbsShort
