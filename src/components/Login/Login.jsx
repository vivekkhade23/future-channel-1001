import {
    Box,
    Text,
    Image,
    Heading,
    HStack,
    Input,
    VStack,
    Button,
    // Select,
    // option
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Loginpage() {
    const navigate=useNavigate()

    return (
        <Box>
            <VStack>
                <Text>Get 15% Good Points back on every order</Text>
                <Image src={"https://www.myglamm.com/images/myglamm-logo.png"} />
                <Heading>*Mobile Number</Heading>
                <hr color="grey" />
                <HStack>
                    <Box border={"1px solid"} w="95px" h="40px">
                    <select >
                        <option>IND +91</option>
                        <option>IND +91</option>
                        <option>IND +91</option>
                        <option>IND +91</option>
                        <option>IND +91</option>
                        <option>IND +91</option>
                    </select>
                    </Box>
                    <Box  border={"0px solid"} h="40px">
                    <Input borderRadius={"none"}></Input>
                    </Box>
                </HStack>
                <Button onClick={()=> navigate("/")} bg="black" color={"white"}>CONTINUE</Button>
                <Text>By Signing up you agree to our Terms & Conditions</Text>
            </VStack>
        </Box>
    );
}
export default Loginpage;
