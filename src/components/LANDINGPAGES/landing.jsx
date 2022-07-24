
import Bestseller from "./bestseller";
import Dropper from "./dropper";
import Footer from "./footer";
import Shop from "./shop";
import Top from "./navTop";
import SlideShow from "./slideshow"
import SpotLight from "./spotlight";
import "./slide.css"
import WalletOffer from "./walletOffers";

import Essentials from "./Essentials"

function Landing(){

    return (
        <div>
        <Top/>
        <br/>
        <Dropper/>
        <br></br>
        <SlideShow/>
        <SpotLight/>
        <br />
        <br />
        <br />
        <Bestseller/>
  
        <br />
        <br />
        <br />
        <Essentials/>
        <br />
        <br />
        <br />
  
        <WalletOffer/>
        <br />
        <br />
        <br />
        <Shop/>
        <br />
        <br />
        <br />
        <Footer/>
      </div>
    )
}
export default Landing;