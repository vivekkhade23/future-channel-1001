import React from 'react'

import {Routes, Route} from "react-router-dom"
import Address from '../Address/Address'
import Cart from '../cartpage/Cart'
import Checkout from '../checkout/checkout'
import Landing from '../LANDINGPAGES/landing'
import Loginpage from '../Login/Login'
import Payment from '../payment/Payment'
import Production from '../product/productpage'
import Success from '../success/success'

function AllRoutes() {
  return (
  <Routes>
    <Route   
    path='/'
    element={<Landing/>}
    />
 <Route   
    path='/product'
    element={<Production/>}
    />
     <Route   
    path='/cart'
    element={<Cart/>}
    />
     <Route   
    path='/address'
    element={<Address/>}
    />
     <Route   
    path='/checkout'
    element={<Checkout/>}
    />
     <Route   
    path='/payment'
    element={<Payment/>}
    />
      <Route   
    path='/login'
    element={<Loginpage/>}
    />
   <Route   
    path='/success'
    element={<Success/>}
    />
   
 
 
 
 
  </Routes>

  )
}

export default AllRoutes