import { HStack, VStack } from "@chakra-ui/react";
import "./slide.css"
import SpotCard from "./SpotCard";

function SpotLight() {
    return (
        <VStack>
        <h3 className="spotlight">
            In The Spotlight</h3>

<HStack gap={"25px"}>
    <SpotCard text={"Mansoon SkinCare Essentials"} src={"https://files.myglamm.com/site-images/original/700x-488-monsoon.jpg"}/>
    <SpotCard text={"Buy 3 Get 3 Sheet Masks"} src={"https://files.myglamm.com/site-images/original/700x488-sheet-mask.gif"}/>
    <SpotCard text={"Shop More Save More"} src={"https://files.myglamm.com/site-images/original/LIT700x488_1.jpg"}/>
</HStack>


            </VStack>

    )
}
export default SpotLight;