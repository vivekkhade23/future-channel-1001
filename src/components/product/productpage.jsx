import { Box } from "@chakra-ui/react";
import Dropper from "../LANDINGPAGES/dropper";
import Footer from "../LANDINGPAGES/footer";
import Top from "../LANDINGPAGES/navTop";
import Des from "./description";
import Header from "./header";
import Shanmpoo from "./Shampoo";

function Production (){

    return (
        <Box>
        <Top/>
        <br/>
        <br/>
<Dropper/>
        <br/>
        <br/>

        <Header/>
        
        <br/>
        <br/>
<Shanmpoo/>
<br/>
        <br/>
        <Des/>
        <br />
<br /><br />
<br />
<Footer/>
        </Box>
    )
}
export default Production;