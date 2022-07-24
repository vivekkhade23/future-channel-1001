import { HStack, VStack } from "@chakra-ui/react";
import SpotCard from "./SpotCard";


function Essentials(){
    return (
        <VStack>
        <h3 className="spotlight">
            ESSENTIALS</h3>

<HStack gap={"25px"}>
    <SpotCard text={"Wipeout"} src={"https://files.myglamm.com/site-images/original/combo-Banner--700-x-488_1.jpg"}/>
    <SpotCard text={"Under 499 Store"} src={"https://files.myglamm.com/site-images/original/Glamm-Picks-700x488.jpg"}/>
    <SpotCard text={"Under 999 Store"} src={"https://files.myglamm.com/site-images/original/Glamm-Must-haves-desktop.jpg"}/>
</HStack>
</VStack>
    )
}
export default Essentials;