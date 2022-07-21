import ShampooCard from "./shampooCard";
import "../LANDINGPAGES/slide.css"
import { HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

function Shanmpoo(){

   

    return (
        <VStack>
        <h3 className="spotlight">
            
            SHAMPOO</h3>
<VStack>
<HStack gap={"35px"} mb="75px">
<ShampooCard src={"https://files.myglamm.com/site-images/400x400/Artboard-1-(1).jpg"} price={239} cutprice={299} body={"For Hair Fall Control"} head={"MyGlamm SUPERFOODS Onion & Moringa Shampoo"} />
<ShampooCard price={319} cutprice={399} body={"Anti-Dandruff & Moisturising Hair Cleanser"} head={"MyGlamm SUPERFOODS Cacao, Coffee & Coconut Shampoo"} src="https://files.myglamm.com/site-images/800x800/SHP-(1).jpg"/>
<ShampooCard price={199} src={"https://files.myglamm.com/site-images/800x800/Product-1_13.jpg"} cutprice={299} body="For Hair Fall Control" head={"MyGlamm SUPERFOODS Onion & Moringa Shampoo - Flat Price"}/>
 </HStack>
<HStack gap={"35px"}>
<ShampooCard body={"Nourishing & Cleansing Shampoo with extracts from natural superfoods"} head={"MyGlamm SUPERFOODS Passion Fruit & Rosemary Shampoo"} price={449} cutprice={499} src={"https://files.myglamm.com/site-images/800x800/Passion-Fruit--Rosemary-Shampoo.jpg"}/>
<ShampooCard body={"Anti-Dandruff & Moisturising Hair Cleanser"} head={"MyGlamm SUPERFOODS Cacao, Coconut & Coffee Shampoo with SUPERFOODS Pouch"} cutprice={464} price={324} src={"https://files.myglamm.com/site-images/800x800/SMP-(1).jpg"}/>
   
   
    <ShampooCard body={"Nourishing & Cleansing Shampoo with extracts from natural superfoods"} head={"MyGlamm SUPERFOODS Passion Fruit & Rosemary Shampoo"} price={449} cutprice={499} src={"https://files.myglamm.com/site-images/800x800/Passion-Fruit--Rosemary-Shampoo.jpg"}/>
</HStack>
<HStack gap={"35px"}>
<ShampooCard price={319} cutprice={399} body={"Anti-Dandruff & Moisturising Hair Cleanser"} head={"MyGlamm SUPERFOODS Cacao, Coffee & Coconut Shampoo"} src="https://files.myglamm.com/site-images/800x800/SHP-(1).jpg"/>
<ShampooCard price={199} src={"https://files.myglamm.com/site-images/800x800/Product-1_13.jpg"} cutprice={299} body="For Hair Fall Control" head={"MyGlamm SUPERFOODS Onion & Moringa Shampoo - Flat Price"}/>
<ShampooCard body={"Anti-Dandruff & Moisturising Hair Cleanser"} head={"MyGlamm SUPERFOODS Cacao, Coconut & Coffee Shampoo with SUPERFOODS Pouch"} cutprice={464} price={324} src={"https://files.myglamm.com/site-images/800x800/SMP-(1).jpg"}/>

</HStack>
 </VStack>
        <hr style={{width:"1500px"}}/>    </VStack>
        
    )
}
export default Shanmpoo;