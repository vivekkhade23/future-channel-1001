import { Box, Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Head from "../Address/head";



function Cart(){

    let data=JSON.parse(localStorage.getItem("cart"));
    console.log(data);
  
    const navigate=useNavigate()

    let sum=0;
    for(let i=0;i<data.length;i++){

        sum=sum+ Number(data[i].price);
       
    }
  console.log(sum)
 

    return(
<Box>
     <Box ml={"225px"}><Head /></Box>
    <VStack>
<Heading>MY BAG</Heading>

   <Box>
{ data.map(function(el){
    return(
        <HStack justifyContent={"space-between"}>       
    <Image w={"96px"} h="96px" m={10} key={el.index} src={el.image} alt="image"/>,
    <Text fontSize={17} fontWeight={500} maxWidth={"235px"} key={el.index}>{el.name}</Text>,
    <Text fontSize={17} fontWeight={500} key={el.index}> ₹ {el.price}</Text>,
   
   



</HStack>

    )
})}


 <Box>
    <HStack w="900px"  ml={"253px"} justifyContent={"space-between"} >
       <Text>You will earn  ₹ 21 Good Points as cashback on this order.</Text> 
  <Text fontSize={17} fontWeight={700}>GRAND TOTAL₹ {sum}</Text>
    </HStack>
 </Box>

   
    <Button onClick={()=> navigate("/address")}  w={"500px"} color="white" bg="black" mt={"45px"} ml="225px" >
        PROCEED TO CHECKOUT
    </Button>
   



 </Box>




    </VStack>
</Box>
    )
}
export default Cart;