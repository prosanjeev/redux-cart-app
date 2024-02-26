import { Card, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';

const TotalPriceInCart = () => {
  const { totalPrice } = useSelector((state) => state.cart);
  console.log(totalPrice)

  return (
    <Card px={5} py={2}><Text fontSize='28px' fontWeight='600'> ${totalPrice} </Text> </Card>
  )
}

export default TotalPriceInCart