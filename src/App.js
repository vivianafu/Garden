import React from 'react'
import RentProdIndex from './pages/RentProdIndex'
import SaleProdIndex from './pages/SaleProdIndex'
import RentProdDetail from './pages/RentProdDetail'
import RentProdList from './pages/RentProdList'
import { VNavBarTest } from './components/VNavBarTest'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <>
        {/* <Link to="/2">關於我們</Link>
        <Link to="/3">Home </Link> */}
        <VNavBarTest />
        <Switch>
          <Route path="/list" exact>
            <RentProdList />
          </Route>
          <Route path="/list/detail/:id?">
            <RentProdDetail />
          </Route>
          <Route path="/">
            <RentProdIndex />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
