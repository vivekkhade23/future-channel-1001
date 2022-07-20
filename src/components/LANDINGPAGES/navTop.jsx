import {  Flex,  HStack, VStack } from "@chakra-ui/react"
import { Image, Text, InputLeftElement, Input, InputGroup } from '@chakra-ui/react'
import { Icon, SearchIcon } from "@chakra-ui/icons"
import { BsFillBagFill, BsFillPersonFill } from "react-icons/bs";
function Top() {

    return (
        <VStack>
            <Flex h="50px" w="1500px" bg="#fee8e8" p="2rem" justifyContent="space-between">
                <HStack w="1500px" justifyContent="space-between">
                    <HStack w="500px" >
                        <Flex w="200px">
                            <Image src='https://www.myglamm.com/images/gift.svg' alt='gift' />
                            <Text>FLAT 199 Store</Text>
                        </Flex>
                        <Text fontWeight={600} color="#ff9797">SHOP NOW</Text>
                    </HStack>
                    <HStack>
                        <Image src="https://www.myglamm.com/images/shop.svg" alt="home" />
                        <Text>MyGlamm Store</Text>
                    </HStack>
                </HStack>
            </Flex>

            <HStack w="1500px" spacing={4} justifyContent="space-around" >
                <Flex>
                    <Image src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt="myglamm" marginRight={"55px"}/>
                    <InputGroup w="400px" h="35px" color='gray.300' variant='filled' focusBorderColor='none' p="15px">
                        <InputLeftElement
                            py="35px"
                            px="40px"
                            pointerEvents='none'
                            children={<SearchIcon color='gray.300' />}
                        />
                        <Input type='tel' placeholder='Find Lipstick,Eyeliner,Makeup Tutorial,etc' color='gray.300' />
                    </InputGroup>
                </Flex>
                <Flex gap={"40px"}>
                    <Icon as={BsFillBagFill} w={6} h={6} />
                    <Icon as={BsFillPersonFill} w={6} h={6} />
                </Flex>

            </HStack>

        </VStack>

    )
}
export default Top;