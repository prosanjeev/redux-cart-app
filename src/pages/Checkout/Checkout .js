import {
    Box,
    Grid,
    Image,
    IconButton,
    Text,
    Input,
    Card,
    GridItem,
    Flex,
    Stack,
} from '@chakra-ui/react';
import { IoCloseCircleOutline } from "react-icons/io5";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../features/cart/cartSlice';

function CheckoutPage() {
    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    
    const handleRemoveItem = (itemId) => {
        console.log('Removing item with ID:', itemId);
        dispatch(removeFromCart(itemId));
    };

    const handleQuantityChange = (itemId, event) => {
        const newQuantity = parseInt(event.target.value, 10);
        if (isNaN(newQuantity)) {
            dispatch(updateQuantity({ id: itemId, quantity: 0 }));
        } else {
            dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
        }
    };
      
    return (
        <Card w={{ base: '85%', md: '50%' }} mx="auto" mt={8} px={{md:'20', base:'2'}} py={10} borderRadius='25px' border='1px solid #d4cfcf'>
            <Grid templateColumns="repeat(5, 1fr)" gap={{md:'4', base:'1'}}>
                <GridItem w='100%' h='10'  >Image</GridItem>
                <GridItem w='100%' h='10'  >Name</GridItem>
                <GridItem w='100%' h='10'  >Price</GridItem>
                <GridItem w='100%' h='10'  >Qty</GridItem>
                <GridItem w='100%' h='10'  >Remove</GridItem>

                {items.map((item) => (
                    <React.Fragment key={item.id} >
                        <Image src={item.image} alt={item.name} boxSize={{md:"50px", base:'40px'}} borderRadius='10px' />
                        <Text>{item.title}</Text>
                        <Text>${item.price}</Text>

                        <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, e)}
                            w={{md:"60px", base:'50px'}}
                            h={{base:'33px'}}
                            borderRadius="md"
                            textAlign="center"
                            borderColor="gray.300"
                            _hover={{ borderColor: 'gray.400' }}
                            _focus={{ outline: 'none', borderColor: 'blue.500', boxShadow: 'outline' }}
                        />

                        <IconButton
                            icon={<IoCloseCircleOutline />}
                            aria-label="Remove product"
                            colorScheme="red"
                            size="sm" // or "md", "sm", "xs"
                            onClick={() => handleRemoveItem(item.id)}
                        />
                    </React.Fragment>
                ))}
            </Grid>
        </Card>
    );
}

export default CheckoutPage;
