import { Box, Button, Center, Heading, HStack, Icon, Input, Text, VStack } from "@chakra-ui/react";
import { BsCash, BsCashCoin, BsCreditCard, BsWallet2 } from "react-icons/bs";
import { MdLanguage, MdOutlinePayment } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Head from "../Address/head";


function Payment() {

    const navigate = useNavigate()




    return (
        <Box >
            <Head />
            <Heading mb={35}>Payment</Heading>
            <HStack spacing={"145px"}>
                <VStack gap={4}>
                    <Text fontWeight={500} alignSelf={"flex-start"} >Payment Method</Text>
                    <HStack border={"1px solid"} w="220px" p={3} bg={"#fcf8ed"} alignSelf={"flex-start"}>
                        <Icon color={"gray.400"} as={BsCreditCard} />
                        <Text fontWeight={500} fontSize={14}>Credit or Debit Card</Text>
                    </HStack>
                    <HStack alignSelf={"flex-start"}>
                        <Icon color={"gray.400"} as={MdLanguage} />
                        <Text fontWeight={500} fontSize={14}>Net Banking</Text>
                    </HStack>
                    <HStack alignSelf={"flex-start"}>
                        <Icon color={"gray.400"} as={MdOutlinePayment} />
                        <Text fontWeight={500} fontSize={14}>Google Pay/PhonePe/UPI</Text>
                    </HStack>
                    <HStack alignSelf={"flex-start"}>
                        <Icon color={"gray.400"} as={BsWallet2} />
                        <Text fontWeight={500} fontSize={14}>Wallets</Text>
                    </HStack>
                    <HStack alignSelf={"flex-start"}>
                        <Icon color={"gray.400"} as={BsCash} />
                        <Text fontWeight={500} fontSize={14} >Cash On Delivery</Text>
                    </HStack>
                    <HStack alignSelf={"flex-start"}>
                        <Icon color={"gray.400"} as={BsCashCoin} />
                        <Text fontWeight={500} fontSize={14}>Pay with Rewards</Text>
                    </HStack>
                </VStack>
                <VStack maxW={"500px"} gap={7} alignSelf={"flex-start"} textAlign={"start"}>
                    <HStack w="100%" fontWeight={500} fontSize={14} border={"1px solid"} p={3} bg={"#fcf8ed"} justifyContent={"space-between"} alignSelf={"flex-start"}>
                        <Text>AMOUNT PAYABLE</Text>
                        <Text>₹947.00</Text>
                    </HStack>
                    <Text fontWeight={500} fontSize={14} alignSelf={"flex-start"}>New Card</Text>
                    <HStack alignSelf={"flex-start"} w="100%" fontWeight={500} fontSize={14}>
                        < Text w="160px"> Card Number :</Text>
                        <Input type={"number"} variant={"filled"} placeholder="XXXX-XXXX-XXXX-XXXX" />
                    </HStack>
                    <HStack fontWeight={500} w="100%" fontSize={14}>
                        < Text w="220px" alignSelf={"flex-start"}> Cardholder's Name :</Text>
                        <Input variant={"filled"} placeholder="eg. vivek khade" />
                    </HStack>
                    <HStack gap={10} fontWeight={500} w="100%" alignSelf={"flex-start"} fontSize={14} >
                        <Text alignSelf={"flex-start"}>Validity:</Text>
                        <HStack maxW={"150px"}>
                            <Input variant={"filled"} placeholder="MM" />
                            <Input variant={"filled"} placeholder="YY" />
                        </HStack>
                        <HStack>
                            <Text>CVV:</Text>
                            <Input variant={"filled"} placeholder="***" />
                        </HStack>
                    </HStack>
                </VStack>
          </HStack>
            <br />
            <br />
            <Button onClick={() => navigate("/success")} color={"white"} bg={"black"}>Pay ₹ 947.00 </Button>
        </Box>
    )





}
export default Payment;