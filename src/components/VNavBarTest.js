import React from 'react'
import { devUrl } from '../config/index'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

const VNavBarTest = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src={devUrl + '/images/svg/logo-dark.svg'}
          alt="react-router-breadcrumb"
          width="30"
          height="30"
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              植物租賃
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/list">
              所有租賃商品
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/3"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              商品分類
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/list/detail">
                大型植栽
              </Link>
              <Link className="dropdown-item" to="/rentproddetail">
                中型植栽
              </Link>
              <Link className="dropdown-item" to="/rentproddetail">
                小型植栽
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export { VNavBarTest }
