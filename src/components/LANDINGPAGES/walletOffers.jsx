import { HStack, VStack } from "@chakra-ui/react";
import SpotCard from "./SpotCard";


function WalletOffer(){
    return (
        <VStack>
        <h3 className="spotlight">
        Wallet Offers</h3>

<HStack gap={"25px"}>
    <SpotCard text={"Cred Pay"} src={"https://files.myglamm.com/site-images/original/CRED-Pay-700x488-_1.jpg"}/>
    <SpotCard text={"MobiQuik Wallet"} src={"https://files.myglamm.com/site-images/original/mobikwik-700x488_1.jpg"}/>
    <SpotCard text={"Simpl offer"} src={"https://files.myglamm.com/site-images/original/simpl-700x488-_1.jpg"}/>
</HStack>
</VStack>
    )
}
export default WalletOffer;