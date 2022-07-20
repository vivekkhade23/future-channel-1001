import { Box ,HStack,Text} from "@chakra-ui/react";


function Header(){

return (
    <Box>
        <HStack ml={395}>  
       <Text fontWeight={400}> HOME</Text>
       <Text fontWeight={400}>/HAIR /</Text>
       <Text fontWeight={400}>CAREBATH and SHOWER /</Text>
        <Text fontWeight={700} >SHAMPOO</Text>
        </HStack>
        <hr/>
    </Box>
)


}
export default Header;