import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { BsTypeStrikethrough } from "react-icons/bs";


function ShampooCard({src,head,body,price,cutprice}){


    return (
<Box>
    <VStack w="320px" border={"1px solid grey"} pb={4}>
        <Image src={src}/>
        <Heading textOverflow={"ellipsis"} fontWeight={600} fontSize={17}>{head}</Heading>
        <Text>{body}</Text>
        <HStack>
            <Heading fontSize={15}>₹{price}</Heading>
           <Text textDecoration={"line-through"}>₹{cutprice}</Text>
        </HStack>
    </VStack>
</Box>
    )
}
export default ShampooCard;