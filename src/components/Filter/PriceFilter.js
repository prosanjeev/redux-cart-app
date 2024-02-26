// src/components/PriceFilter.js
import React from 'react';
import { Box, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';

const PriceFilter = ({ minPrice, maxPrice, value, onChange }) => {
  const handleChange = (newValue) => {
    onChange(newValue);
  };

  return (
    <Box>
      <Text mb={2} fontSize="sm" fontWeight="semibold">Price</Text>
      <Slider
        min={minPrice}
        max={maxPrice}
        step={1}
        value={value}
        onChange={handleChange}
        colorScheme="blue"
        focusThumbOnChange={false}
      >
        <SliderTrack bg="gray.200" borderRadius="full" />
        <SliderFilledTrack bg="blue.500" borderRadius="full" />
        <SliderThumb
          boxSize={6}
          borderWidth={2}
          borderColor="blue.500"
          _focus={{ boxShadow: 'none' }}
        >
          <Text fontSize="xs" fontWeight="semibold" color="white" textAlign="center" transform="translateY(-2px)">
            {value}
          </Text>
        </SliderThumb>
      </Slider>
      <Text mt={2} fontSize="xs" color="gray.500" textAlign="center">
        Price: ${minPrice} - ${value}
      </Text>
      <Text mt={1} fontSize="xs" color="gray.500" textAlign="center">
        Filtered amount: ₹{minPrice} - ₹{maxPrice}
      </Text>
    </Box>
  );
};

export default PriceFilter;
