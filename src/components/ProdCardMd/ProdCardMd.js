import React, { useState } from 'react'
import './ProdCardMd.scss'
import { devUrl } from '../../config/index'
import { prod } from '../../carddata'
import { NavLink } from 'react-router-dom'

function ProdCardMd() {
  console.log(prod.porducts)
  const [products, setProducts] = useState(prod.porducts)
  return (
    <>
      <div className="v-prod-cat">
        <h3>大型植栽</h3>
        <p>Large Planting</p>
      </div>
      {/* 商品卡  */}
      <div className="v-prod-col d-flex justify-content-between flex-wrap">
        {products.map((e) => (
          <NavLink to={`/list/detail/${e.prod_id}`}>
            <figure className="v-product-card-md">
              <img className="v-prod-img" src={e.image} alt="" />
              <figcaption className="v-figtitle">
                <p className="m-0">{e.prod_name}</p>
              </figcaption>
              <p className="v-price">NT$ {e.price}/ 月</p>
            </figure>
          </NavLink>
        ))}
        {/* <figure className="v-product-card-md m-0">
          <img
            className="v-prod-img"
            src={
              devUrl + '/images/images/rentprodlist/九龍柱大理石落地盆栽.jpg'
            }
            alt=""
          />
          <figcaption className="v-figtitle">
            <p className="m-0">九龍柱落地盆栽</p>
          </figcaption>
          <p className="v-price">NT$ 500/ 月</p>
        </figure>
        <figure className="v-product-card-md m-0">
          <img
            className="v-prod-img"
            src={
              devUrl + '/images/images/rentprodlist/九龍柱大理石落地盆栽.jpg'
            }
            alt=""
          />
          <figcaption className="v-figtitle">
            <p className="m-0">九龍柱落地盆栽</p>
          </figcaption>
          <p className="v-price">NT$ 500/ 月</p>
        </figure> */}
      </div>
      {/* 第一列ends */}
      <div className="v-prod-col d-flex justify-content-between ">
        {/* <figure className="v-product-card-md m-0">
          <img
            className="v-prod-img"
            src={
              devUrl + '/images/images/rentprodlist/九龍柱大理石落地盆栽.jpg'
            }
            alt=""
          />
          <figcaption className="v-figtitle">
            <p className="m-0">九龍柱落地盆栽</p>
          </figcaption>
          <p className="v-price">NT$ 500/ 月</p>
        </figure>
        <figure className="v-product-card-md m-0">
          <img
            className="v-prod-img"
            src={
              devUrl + '/images/images/rentprodlist/九龍柱大理石落地盆栽.jpg'
            }
            alt=""
          />
          <figcaption className="v-figtitle">
            <p className="m-0">九龍柱落地盆栽</p>
          </figcaption>
          <p className="v-price">NT$ 500/ 月</p>
        </figure>
        <figure className="v-product-card-md m-0">
          <img
            className="v-prod-img"
            src={
              devUrl + '/images/images/rentprodlist/九龍柱大理石落地盆栽.jpg'
            }
            alt=""
          />
          <figcaption className="v-figtitle">
            <p className="m-0">九龍柱落地盆栽</p>
          </figcaption>
          <p className="v-price">NT$ 500/ 月</p>
        </figure> */}
        {/* 第二列ends  */}
      </div>

      {/* <div className="v-prod-cat">
        <h3>大型植栽</h3>
        <p>Large Planting</p>
      </div> */}
    </>
  )
}

export default ProdCardMd
