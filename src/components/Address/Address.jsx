import { Box, Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Footer from "../LANDINGPAGES/footer";
import Head from "./head";

function Address() {
  const[name,setName]=useState("")
  const[email,setemail]=useState("")
  const[number,setnumber]=useState("")
  const[house,sethouse]=useState("")
  const[street,setstreet]=useState("")
  const[neighbour,setneighbour]=useState("")
  const[pincode,setpincode]=useState("")
  const[city,setcity]=useState("")
  const[state,setstate]=useState("")
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    let user={
      name:name,
      email:email,
      number:number,
      house:house,
      street:street,
      neighbour:neighbour,
      pincode:pincode,
      city:city,
      state:state
    }
    
    let data=JSON.parse(localStorage.getItem("user"))||[];
    data.push(user)
    localStorage.setItem("user",JSON.stringify(data))
    console.log(data)
    
  }
  return (
<Box>

<Head/>
    <Box  width="700px" ml="200px" mb="75px"p={25} boxShadow={" rgba(149, 157, 165, 0.2) 0px 8px 24px;"}>
      <VStack  gap={"25px"}>
        <Text>Shipping Address</Text>
        <hr color="grey" width="100%" margin-top="-75px" />
      <form  gap={"25px"}  onSubmit={handleSubmit}>
        <HStack  w="100%">
          <Input variant="filled" placeholder="*Name" onChange={(e)=>setName(e.target.value)}  />
          <Input variant="filled" placeholder="*Number" onChange={(e)=>setnumber(e.target.value)}/>
          <Input variant="filled" placeholder="*Email" onChange={(e)=>setemail(e.target.value)}/>
        </HStack>
        <br/>
        <HStack>
          <Input variant="filled" placeholder="*Other" />
          <Input variant="filled" placeholder="*Flat No. /House No."onChange={(e)=>sethouse(e.target.value)} />
          <Input variant="filled" placeholder="*Street Name"onChange={(e)=>setstreet(e.target.value)} />
          <Input variant="filled" placeholder="*Neighbourhood"onChange={(e)=>setneighbour(e.target.value)} />
        </HStack>
        <br/>
        <HStack>
          <Input variant="filled" placeholder="*Pincode" onChange={(e)=>setpincode(e.target.value)}/>
          <Input variant="filled" placeholder="*City" onChange={(e)=>setcity(e.target.value)}/>
          <Input variant="filled" placeholder="*State" onChange={(e)=>setstate(e.target.value)} />
          <Input variant="filled" placeholder="*Landmark" />
        </HStack>
        <br/>
        <Box alignSelf={"flex-start"} h="25px" mb={"75px"}>
          <input type="checkbox" placeholder="Mark as default" />Mark as default
      <Input color={"white"} bg="black" type={"submit"}  />
        </Box>
        </form>
        <HStack alignSelf={"flex-end"} >
          <Button color={"white"} bg="black">Back</Button>
          <Button color={"white"} bg="black">Continue</Button>
        </HStack>
      </VStack>
     
    </Box>

    <br/>
      <hr style={{width:"1500px",marginLeft:"-150px"}}/>
      <br/>
      <br/>
    <Footer/>
    </Box>
  );
}
export default Address;
