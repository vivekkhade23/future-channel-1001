import { Box, HStack } from "@chakra-ui/react";
import BestCard from "./bestsellerCard";

import "./slide.css"


function Bestseller(){

    return (
        <Box>
        <h3 className="spotlight">
        BESTSELLER</h3>
        <HStack gap={"35px"}>
      <BestCard people="12033" price="395" src="https://files.myglamm.com/site-images/400x400/OTTP-(1).jpg" head="MyGlamm LIT Liquid Matte Lipstick - OTP" body="Moringa Oil Enriched Matte Lipstick" rating="4.9"/>
      <BestCard body="Lightweight, Long-wear Lipsticks" head="Manish Malhotra Hi-Shine Lipstick - Mauve Struck" people={"1122"} price="712" src="https://files.myglamm.com/site-images/400x400/Hi-Shine-Post-1-Mauve-Struck.jpg"/>
      <BestCard people="12033" price="395" src="https://files.myglamm.com/site-images/400x400/OTTP-(1).jpg" head="MyGlamm LIT Liquid Matte Lipstick - OTP" body="Moringa Oil Enriched Matte Lipstick" rating="4.9"/>
      <BestCard body="Lightweight, Long-wear Lipsticks" head="Manish Malhotra Hi-Shine Lipstick - Mauve Struck" people={"1122"} price="712" src="https://files.myglamm.com/site-images/400x400/Hi-Shine-Post-1-Mauve-Struck.jpg"/>
     
        </HStack >
       
        </Box>
    )
}
export default Bestseller;