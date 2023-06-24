import React from 'react'
import {BiMenuAltLeft } from "react-icons/bi"
import {Button, Drawer,HStack, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, VStack, useDisclosure} from "@chakra-ui/react"
import {Link} from "react-router-dom"
const Header = () => {
    const { isOpen, onOpen,onClose}=useDisclosure();
  return (
  <>
  <Button 
  colorScheme='purple'
  zIndex={'overlay'}
  top={'4'}
  left={'4'}
  pos={'fixed'}
  w={'10'}
  h={'10'}
  borderRadius={'full'}
  onClick={onOpen}
   >
    <BiMenuAltLeft size={20}/>
  </Button>
  <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
    <DrawerOverlay/>
    <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>VIDEO HUB</DrawerHeader>
        <DrawerBody>
<VStack alignItems={'flex-start'}>
<Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
            
                <Link to={'/'}>Home</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>

              

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>
            
            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'purple'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'outline'}
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>

        </DrawerBody>
    </DrawerContent>
  </Drawer>
  </>
  )
}

export default Header
