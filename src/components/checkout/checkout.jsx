import { Box, Button, Heading, HStack, Icon, Image, Input, InputGroup, InputRightElement, Text, VStack } from "@chakra-ui/react";
import Head from "../Address/head";
import { MdAgriculture, MdDescription, MdMailOutline, MdSettingsPhone } from "react-icons/md";
import Footer from "../LANDINGPAGES/footer";
import { useNavigate } from "react-router-dom";
function Checkout() {
    const navigate=useNavigate()



let user=JSON.parse(localStorage.getItem("user"))
console.log(user)
console.log(user.name)
    return (
        <Box>
            <VStack boxShadow={"rgba(17, 17, 26, 0.1) 0px 1px 0px"} mb="50px">
                <Head />
                <Heading mb="15px">Checkout</Heading>
                <HStack >
                    <VStack gap={"10px"} textAlign={"start"}>
                        <Box w="100%" boxShadow={"rgba(17, 17, 26, 0.1) 0px 1px 0px"}>
                        <Text mb="10px" textAlign={"start"} fontWeight={700} fontSize={19} >SHIPPING ADDRESS</Text>
                        </Box>
                       
                        <hr />
                        <Text alignSelf={"start"} textAlign={"start"}>{user[0].name}</Text>
                        <Text alignSelf={"start"}>{user[0].street}<br/>{user[0].house}<br/>{user[0].city}</Text>
                        <br />
                        <HStack alignSelf={"start"}>
                            <Icon as={MdSettingsPhone} />
                            <Text>{user[0].number}</Text>
                        </HStack>
                        <HStack alignSelf={"start"}>
                            <Icon as={MdMailOutline} />
                            <Text>{user[0].email}</Text>
                        </HStack>
                        <Button alignSelf={"start"} borderRadius={"none"} w="150px" color={"white"} bg="black">Change</Button>


                        <HStack alignSelf={"start"}>
                            <Icon as={MdAgriculture} />
                            <Text>Expected Delivery Date</Text>
                            <Text>8-Aug-2022</Text>
                        </HStack>
                        <Text fontWeight={600} alignSelf={"start"}>BILLING ADDRESS</Text>
                        <hr w="100%"/>
                        <HStack alignSelf={"start"}>
                            <Text>Same as Shipping Address </Text>
                            <Text fontWeight={700} fontSize={13}>Change</Text>
                        </HStack>
                        <Text lineHeight={5} alignSelf={"start"}>YOUR ORDER</Text>
                        <hr />
                        <HStack alignSelf={"start"}>
                            <Image src="fhvbj" alt="order image" />
                            <Text>Manish Malhotra cinnamon
                                Ginger Night Gel
                            </Text>
                            <Text>1</Text>
                            <Text>₹708</Text>
                        </HStack>




                    </VStack>
                    <VStack gap={10}  >
                        <Box mt="-70px" bg="gray.100" p={8} gap={10}  >
                            <Text  fontSize={19} mb={"10px"}  textAlign={"left"}  >Order Summary</Text>
                            <HStack mb={"10px"}  justifyContent={"space-between"}>
                                <Text>MRP</Text>
                                <Text>₹945.00</Text>
                            </HStack>
                            <HStack mb={"10px"}  justifyContent={"space-between"}>
                                <Text>Discount On MRP</Text>
                                <Text>₹237.00</Text>
                            </HStack >
                            <Text  mt={"15px"} textAlign={"left"} mb={"10px"} fontSize={15} fontWeight={700}>Apply Promo Code</Text>
                            <InputGroup mb={"29px"}  size='md'>
                                <Input
                                color={"white"}
                                    pr='4.5rem'
                                    type="text"
                                    placeholder='Enter code'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='2.75rem' w="185px" size='sm' color={"white"} bg={"black"}>
                                        Apply
                                    </Button>
                                </InputRightElement>
                            </InputGroup>



                            <HStack mb={"10px"}  justifyContent={"space-between"}>
                                <Text>Discount </Text>
                                <Text>[-₹0.00]</Text>
                            </HStack>
                            <HStack mb={"10px"}   justifyContent={"space-between"}>
                                <Text>Shipping Charges</Text>
                                <Text>Free</Text>
                            </HStack>
                            <HStack mb={"15px"} mt={"15px"} fontSize={15} fontWeight={700}  justifyContent={"space-between"}>
                                <Text>Amount Payable</Text>
                                <Text>₹708</Text>
                            </HStack>
                            <HStack  mb={"10px"}  justifyContent={"space-between"}>
                                <Text>You saved</Text>
                                <Text>₹0.00</Text>
                            </HStack>
                            <HStack mb={"10px"}  justifyContent={"space-between"}>
                                <Text>You will earn</Text>
                                <Text>₹0.00</Text>
                            </HStack>
                            <Button onClick={()=> navigate("/payment")} w={"100%"} color={"white"} bg={"black"}>PROCEED TO PAYMENT</Button>
                        </Box>
                    </VStack>
                </HStack>
            </VStack>
          
            <br/>
            <br/>
            <br/>
            <Footer/>
        </Box>
    )

}
export default Checkout;