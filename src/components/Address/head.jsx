import { HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from '@chakra-ui/react'
import { BsFillPersonFill } from "react-icons/bs";


function Head() {


    return (
        <HStack gap={"40px"} boxShadow={"rgba(17, 17, 26, 0.1) 0px 1px 0px"} mb="50px" >
            <Image src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" />
            <VStack w="550px" >
                <HStack gap={"69px"} w="550px" mb="-45px">
                    <Text fontSize={12} fontWeight={600}>SHOPPING BAG</Text>
                    <Text fontSize={12} fontWeight={600}>SELECT ADDRESS</Text>
                    <Text fontSize={12} fontWeight={600}>CHECKOUT</Text>
                    <Text fontSize={12} fontWeight={600}> PAYMENT</Text>
                </HStack>
                <RangeSlider
                    aria-label={['min', 'max']}
                    colorScheme='black'
                    defaultValue={[0, 33, 66, 100]}

                    minH='32'
                >
                    <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                    <RangeSliderThumb index={2} />
                    <RangeSliderThumb index={3} />
                </RangeSlider>
            </VStack>
            <Icon as={BsFillPersonFill} w={6} h={6} />
        </HStack>
    )
}

export default Head;