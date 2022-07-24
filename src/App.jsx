import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


import Landing from './components/LANDINGPAGES/landing'
import Production from './components/product/productpage'
import Loginpage from './components/Login/Login'
import Address from './components/Address/Address'
import Checkout from './components/checkout/checkout'
import Cart from './components/cartpage/Cart'
import Payment from './components/payment/Payment'
import Success from './components/success/success'
import AllRoutes from './components/Routes/AllRoutes'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
 <AllRoutes/>
    </div>
  )
}

export default App;
