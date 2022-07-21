import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


import Landing from './components/LANDINGPAGES/landing'
import Production from './components/product/productpage'
import Loginpage from './components/Login/Login'
import Address from './components/Address/Address'
import Checkout from './components/checkout/checkout'
import Cart from './components/cartpage/Cart'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    {/* <Landing/> */}
{/* <Production/> */}
    {/* <Loginpage/> */}
    {/* <Address/> */}
    <Checkout/>


{/* <Cart/> */}

    </div>
  )
}

export default App;
