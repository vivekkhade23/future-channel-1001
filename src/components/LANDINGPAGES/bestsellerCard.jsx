import { Box, Image, Text, Heading, HStack, Flex, Icon } from "@chakra-ui/react";

import { BsStar } from "react-icons/bs"

function BestCard({ src, head, body, rating, people, price }) {
    return (
        <Box w="250px" white-space={"nowrap"}
space={4}
            overflow="hidden"
            text-overflow="ellipsis" p="10px" boxShadow={"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"}>
            <Image src={src} alt="MHML-(1).jpg" />
            <Box >
                <Text ><Heading fontSize={"14px"} textOverflow={"ellipsis"}>{head}</Heading></Text>
                <Text fontSize={"14px"}>{body}</Text>
                <HStack justify={"center"}>
                    <Flex>
                        <Heading fontSize={"14px"} >{rating}</Heading>
                        <Icon as={BsStar} variant='filled' color="orange" />
                    </Flex>

                    <Flex>
                        <Heading fontSize={"14px"} fontWeight="600" >|   {people} rating   </Heading>
                    </Flex>
                </HStack>
                <Box >
                    <Heading fontSize={"14px"} >   ₹{price}</Heading>
                </Box></Box>
        </Box>
    )
}
export default BestCard;