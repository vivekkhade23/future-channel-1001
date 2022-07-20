import "./drop.css"
// import { useDisclosure } from "@chakra-ui/react"

import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
    HStack,
    VStack,
} from "@chakra-ui/react"
// import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

 function Dropper() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu  isOpen={isOpen}>
            <HStack  alignSelf={"flex-start"}>
                <VStack>
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
              HOME
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
               
            </MenuList>
            </VStack>
            <VStack >
            <MenuButton
                variant="outline"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                
                borderRadius={1}
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
             MAKEUP
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>Lips</MenuItem>
                <MenuItem>Face</MenuItem>
                <MenuItem>Eyes</MenuItem>
            </MenuList>
            </VStack>
            <VStack>
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
             Hair Care
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>shampoo</MenuItem>
                <MenuItem>conditioner</MenuItem>
                <MenuItem>Oil</MenuItem>
                <MenuItem>serum</MenuItem>
            </MenuList>
            </VStack>
            <VStack>
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
            SkinCare
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>Eye cream</MenuItem>
                <MenuItem>serum</MenuItem>
                <MenuItem>Fash wash</MenuItem>
            </MenuList>
            </VStack>
            <VStack>
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
            Sanitizing Care
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>Shower Gel</MenuItem>
                <MenuItem>Soaps</MenuItem>
                <MenuItem>foot care</MenuItem>
            </MenuList>
            </VStack>
           
            
            </HStack>
        </Menu>
    )
}
export default Dropper;