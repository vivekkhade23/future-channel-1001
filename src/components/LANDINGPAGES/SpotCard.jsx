import { Flex, VStack ,Image,Text, Heading} from "@chakra-ui/react";

 function SpotCard({src,text}){
    return (
        <Flex>
            <VStack >
                <Image w={"330px"} h="230px" src={src} alt="image">

                </Image>
                <Text><Heading fontSize={"lg"}>{text}</Heading></Text>
            </VStack>
        </Flex>
    )
 }
 export default SpotCard;