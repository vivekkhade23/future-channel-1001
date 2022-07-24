import { Heading, HStack, VStack ,Text, Select} from "@chakra-ui/react";



function Makeup(){

    return(
        <HStack>

            <VStack>
            <Select>    <Heading>LIPS</Heading></Select>
                <Text>Lipstick </Text>
                <Text>Liquid Lipstick</Text>
                <Text>Hi-Shine Lipstick</Text>
                <Text>Matte Lipstick</Text>
                <Text>Lip Gloss</Text>
                <Text>Lip Liner</Text>
                <Text>LIp Balm</Text>
                <Text>Lip Glitter</Text>
                <Text>Lip Stain</Text>
                <Text>Lipstick set</Text>
                <Text>Lip Kit</Text>
                <Text>Find Youe Lipstick</Text>
            </VStack>
            <VStack>
                <Heading>FACE</Heading>
            <Text>Fixing powder</Text>
            <Text>Primer</Text>
            <Text>Concealer</Text>
            <Text>Foundation</Text>
            <Text>Compact Powder</Text>
            <Text>setting Powder</Text>
            <Text>Banana Powder</Text>
            <Text>Sindoor</Text>
            <Text>Highighter</Text>
            <Text>Blush</Text>
            <Text>Bronzer</Text>
            <Text>Cheek Stain</Text>
            
            
            </VStack>
            <VStack>
                <Heading>EYES</Heading>
                <Text>Eye Shadows</Text>
                <Text>Eyeliner</Text>
                <Text>EyeBrows</Text>
                <Text>Glitter</Text>
                <Text>Mascara</Text>
                <Text>Kajal</Text>
                <Text>Eye Combos</Text>
            </VStack>
            <VStack>
                <VStack><Heading>NAILS</Heading>
                <Text>Gel</Text>
                <Text>Matte Nail Enamel</Text>
                <Text>MAtte NAil Polish</Text>
                <Text>Glossy Nail Enamel</Text>
                
                
                </VStack>
                <VStack><Heading>KITS AND COMBOS</Heading>
                <Text>Makep Kits</Text>
                <Text>Bridal MAkeup Kits</Text>
                <Text>MAkeup Gift Sets</Text>
                
                
                </VStack>
                <VStack><Heading>MAKEUP ACCESSORIES</Heading>
                <Text>Makeup Brushes</Text>
                <Text>Eyeshadows Brushes</Text>
                
                
                
                </VStack>
            </VStack>

            </HStack>
    )
}

export default Makeup;