import { render } from '@testing-library/react'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import Footer from './components/Footer/Footer'

function Apptest() {
    render(
        <>
            <Footer />
        </>
    )
}

export default Apptest