import { Button, Card, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { addToCart } from '../../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';


const Product = ({ product,  }) => {

    const dispatch = useDispatch();
    
    const handleAddToCart = () => {
        dispatch(addToCart(product));
      };
   
    return (
        <Card borderRadius='25px' w='280px'>
            <Img borderRadius='25px' h='240px' src={product.image} />
            <Stack p={5}>
                <Text fontSize='20px' fontWeight='600' noOfLines={1}>{product.title}</Text>
                <Text fontSize='20px' fontWeight='600'>${product.price.toFixed(2)}</Text>
                {/* <Text color='red'> {product.inStock ? (
                    <Text color='green'>In Stock</Text>
                ) : (
                    <Text color='red'>Out of Stock</Text>
                )}</Text> */}
                {/* <Button
                    onClick={product.inStock ? () => handleAddToCart(product) : undefined}
                    disabled={!product.inStock}
                    colorScheme={product.inStock ? "orange" : "gray"}
                >
                    Add to Cart
                </Button> */}

                <Button onClick={handleAddToCart} colorScheme='orange'>Add to Cart</Button>
            </Stack>
        </Card>
    )
}

export default Product