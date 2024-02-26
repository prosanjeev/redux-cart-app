// ProductGrid.js
import React, { useEffect, useState } from 'react';
import { HStack, Stack, Text } from '@chakra-ui/react';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../../features/products/productsSlice';
import PriceFilter from '../../../components/Filter/PriceFilter';

const ProductGrid = () => {
  const dispatch = useDispatch();
  const { selectedCategory, products } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceRange, setPriceRange] = useState([0, getMaxPrice(products)]); // Default price range

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`);
      const products = await productsData.json();
      dispatch(setProducts(products));
    };

    if (selectedCategory) {
      fetchProducts();
    }
  }, [dispatch, selectedCategory]);

  useEffect(() => {
    const filtered = products.filter(product => product.price <= priceRange[1]);
    setFilteredProducts(filtered);
  }, [products, priceRange]);

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
  };

  function getMaxPrice(products) {
    return Math.max(...products.map(product => product.price), 0);
  }

  return (
    <HStack>
      <PriceFilter minPrice={0} maxPrice={getMaxPrice(products)} value={priceRange} onChange={handlePriceChange} />
      <Stack px={{ md: '20', base: '0' }}>
        <Text fontSize='40px' fontWeight='600'>{selectedCategory}</Text>
        <HStack mt={10} gap={10} flexWrap='wrap' mx='auto'>
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </HStack>
      </Stack>
    </HStack>
  );
};

export default ProductGrid;
