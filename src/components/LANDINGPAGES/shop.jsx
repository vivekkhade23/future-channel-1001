import { Box, HStack } from "@chakra-ui/react";
import ShopCard from "./ShopCard";

function Shop(){

return(
<Box>
        <h3 className="spotlight">
       SHOP FROM CATEGORIES</h3>
        <HStack gap={"35px"}>
            <ShopCard text="Skin" image="https://files.myglamm.com/site-images/original/SKin-1-2.png" />
            <ShopCard text="Lips" image="https://files.myglamm.com/site-images/original/Lips-3.png" />
            <ShopCard text="Hair" image="https://files.myglamm.com/site-images/original/Superfoods-Model-120-X-120-px_2.jpg" />
            <ShopCard text="Eyes" image="https://files.myglamm.com/site-images/original/Eyes-4.png" />
            <ShopCard text="Face" image="https://files.myglamm.com/site-images/original/Face-5.png" />
            <ShopCard text="Nails" image="https://files.myglamm.com/site-images/original/Nails-1.png" />
            <ShopCard text="Sanirizing Care" image="https://files.myglamm.com/site-images/original/App-PersonalCare_2.png" />
            <ShopCard text="Bath and Body" image="https://files.myglamm.com/site-images/original/Bath.png" />
            
        </HStack>
    </Box>
    
)    
    
    }
    export default Shop;