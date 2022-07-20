import { Box ,Image,Text} from "@chakra-ui/react";




function ShopCard({image,text}){
    return (
        <Box borderRadius={"100px"}>
       <Image src={image} alt={text}></Image>
       <Text>{text}</Text>
        </Box>
    )
}
export default ShopCard;