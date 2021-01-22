import React from 'react'
import { NavLink } from 'react-router-dom'
import { devUrl } from '../../config/index'
import './NineGridSale.scss'

function NineGrid() {
  return (
    <>
      {/* 九宮格  */}
      <div className="container d-flex justify-content-center ">
        <div className="row ninegrid-row">
          <div className="col-lg-4 col-md-6 ">
            <img
              className="v-ninegrid-item"
              src={
                devUrl + '/images/images/saleprodindex/派拉蒙巴西里香草盆栽.jpg'
              }
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 ">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/saleprodindex/朝天椒.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 ">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/saleprodindex/貓薄荷.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 ">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/saleprodindex/朝天椒.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 mobile-none">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/saleprodindex/貓薄荷.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 mobile-none">
            <img
              className="v-ninegrid-item"
              src={
                devUrl + '/images/images/saleprodindex/派拉蒙巴西里香草盆栽.jpg'
              }
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 mobile-none">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/saleprodindex/貓薄荷.jpg'}
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 mobile-none">
            <img
              className="v-ninegrid-item"
              src={
                devUrl + '/images/images/saleprodindex/派拉蒙巴西里香草盆栽.jpg'
              }
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 pad-none mobile-none">
            <img
              className="v-ninegrid-item"
              src={devUrl + '/images/images/saleprodindex/朝天椒.jpg'}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="v-normal-btn">
        <NavLink to="/saleprod/saleprodall">
          <div className="v-btn-p">更多商品</div>
        </NavLink>
      </div>
    </>
  )
}

export default NineGrid
