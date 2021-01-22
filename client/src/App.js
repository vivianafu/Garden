import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
//
// import Home from './pages/Home'
// import CourseGuide                    from './pages/CourseGuide'
// import Lesson                         from './pages/Lesson'
// import LessonDetail                   from './pages/LessonDetail'
// import Member                         from './pages/Member'
// import MemberEditProfile              from './pages/MemberEditProfile'
// import MyCollections                  from './pages/MyCollections'
// import Notifications from './pages/Notifications'
// import OrderManagementPurchase        from './pages/OrderManagementPurchase'
// import OrderManagementPurchaseReturn  from './pages/OrderManagementPurchaseReturn'
// import OrderManagementRental          from './pages/OrderManagementRental'
// import OrderManagementRentalReturn    from './pages/OrderManagementRentalReturn'
// import PurchaseOrder                  from './pages/PurchaseOrder'
// import RentalOrder                    from './pages/RentalOrder'
import RentProdDetail from './pages/RentProdDetail'
import RentProdIndex from './pages/RentProdIndex'
import RentProdList from './pages/RentProdList'
import SaleProdIndex from './pages/SaleProdIndex'
import VScollToTop from './components/VScrollToTop'
// import ShoppingCartAddressSelect      from './pages/ShoppingCartAddressSelect'
// import ShoppingCartComplete           from './pages/ShoppingCartComplete'
// import ShoppingCartPaymentSelect      from './pages/ShoppingCartPaymentSelect'
// import ShoppingCartPurchase           from './pages/ShoppingCartPurchase'
// import ShoppingCartRental             from './pages/ShoppingCartRental'
// //
// import AccountView from './components/AccountView/AccountView'
// import Footer from './components/Footer/Footer'
import ProdCardSm from './components/ProdCardSm/ProdCardSm'
import ProdCardMd from './components/ProdCardMd/ProdCardMd'
import ProdCardRent from './components/ProdCardRent/ProductCardRent'
import ProductCardLg from './components/ProdCardRent/ProductCardRent'
import ProdSideNav from './components/ProdSideNav/ProdSideNav'

function App() {
  const [occasion,setOccasion]=useState('')
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <RentProdDetail  />
          </Route>

          {/* <Route exact path="/courseguide">
        <CourseGuide />
      </Route>

      <Route exact path="/members">
        <Member />
      </Route>

      <Route exact path="/members/:name/lesson" >
        <Lesson />
      </Route>

      <Route exact path="/members/:name/lesson/detail" >
        <LessonDetail />
      </Route>

      <Route exact path="/members/:name/edit" >
        <MemberEditProfile />
      </Route>

      <Route exact path="/members/:name/mycollections" >
        <MyCollections />
      </Route>

      <Route exact path="/members/:name/notifications" >
        <Notifications />
      </Route>

      <Route exact path="/members/:name&:order_id/purchase_detail" >
        <OrderManagementPurchase />
      </Route>

      <Route exact path="/members/:name&:order_id/purchase_return" >
        <OrderManagementPurchaseReturn/>
      </Route>

      <Route exact path="/members/:name&:order_id/rentaldetail">
        <OrderManagementRental />
      </Route>

      <Route exact path="/members/:name&:order_id/rentalreturn">
        <OrderManagementRentalReturn />  
      </Route>

      <Route exact path="/members/:name/purchase_management">
        <PurchaseOrder />        
      </Route>

      <Route exact path="/members/:name/rental_management">
        <RentalOrder />          
      </Route>

      <Route exact path="/members/:name/purchase_management">
        <RentProdDetail />            
      </Route> */}

          <Route exact path="/植物租賃">
            <RentProdIndex  setOccasion={setOccasion}/>
          </Route>

          {/* <Route exact path="/植物租賃/:租賃情境">
            <RentProdList />
          </Route> */}


          <Route exact path="/植物租賃/租賃商品">
            <VScollToTop>
            <RentProdList occasion={occasion}/>
            </VScollToTop>
          </Route>

          <Route exact path="/植物租賃/租賃商品/:id?">
          <VScollToTop>
            <RentProdDetail />
            </VScollToTop>
          </Route>



          <Route exact path="/植物選購">
            <SaleProdIndex />
          </Route>

          {/* <Route exact path="/123">
        <ShoppingCartAddressSelect />    
      </Route> 
      <Route exact path="/456">
        <ShoppingCartComplete  /> 
      </Route>

      <Route exact path="/789">
        <ShoppingCartPaymentSelect />    
      </Route>

      <Route exact path="/101">
        <ShoppingCartPurchase />         
      </Route>

      <Route exact path="/112"> 
        <ShoppingCartRental />
      </Route> */}
        </Switch>
      </>
    </Router>
  )
}

export default App
