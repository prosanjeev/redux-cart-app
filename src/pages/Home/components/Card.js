import { Card, HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Cart = ({ category, onClick }) => {

  const upperCaseText = category.toUpperCase();


  return (
    <>
      <HStack flexWrap='wrap'>

        <Card w={{md:'550px', base:'340px'}} h={{md:'350px', base:'200px'}} align='center' justify='center'
          onClick={onClick}
          border='1px solid #d4cfcf'
          borderRadius='25'>
          <Text fontSize={{md:'44px', base:'30px'}} fontWeight='600'>
            {upperCaseText}
          </Text>
        </Card>

      </HStack>

    </>
  )
}

export default Cart