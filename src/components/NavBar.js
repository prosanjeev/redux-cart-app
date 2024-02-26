import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import ItemCount from './ItemCount'
import TotalPriceInCart from './TotalPriceInCart'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
   <Box position="sticky" top="0" zIndex="sticky" mb={10} borderBottom='1px solid #d1cbcb' boxShadow="sm"  bg="white">
     <Flex h={{ md: '100px', base: '150px' }} justify={{md:'space-between', base:'center'}} w='80vw' mx='auto' align='center' 
     flexWrap='wrap' >
      
     <Link to='/'> <Text fontSize='36px' fontWeight='600'> Redux Cart App</Text></Link>

      <Link to='/checkout'>
        <HStack gap={4} >
          <ItemCount  /> 
          <TotalPriceInCart  />
        </HStack>
      </Link>
    </Flex>
   </Box>
  )
}

export default NavBar
