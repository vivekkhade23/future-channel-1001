import { Box, Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsTypeStrikethrough } from "react-icons/bs";




function ShampooCard({src,head,body,price,cutprice}){

    const[cart ,setCart]=useState([]);

    // useEffect(()=>{
       
    // },[cart])

const product={
    num:1,
    image:src,
    name:head,
    des:body,
    price:price,
    cutprice:cutprice
}

function handleSubmit(){
  let data=JSON.parse(localStorage.getItem("cart"))||[];
  data.push(product)
 setCart(data);
 localStorage.setItem("cart",JSON.stringify(cart))
  console.log(cart)
    }
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
        <Button onClick={handleSubmit}>ADD to Cart</Button>
    </VStack>
</Box>
    )
}
export default ShampooCard;
