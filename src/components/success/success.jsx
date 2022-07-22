import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

 function Success() {
    const navigate=useNavigate()

  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
       Your order is placed
      </Heading>
      <Text color={'gray.500'}>
      Thnk you for hopping with us.Hope you enjoyed the user experience .If you have any feedback please contact us on myglammm123@gmail.com
      </Text>
      <Button onClick={()=> navigate("/")} color={"white"} mt="100px" bg={"black"}>CONTINUE SHOPPING</Button>
    </Box>
  );
}
export default Success;