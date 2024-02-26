import { Box, Checkbox,  Stack, Text } from "@chakra-ui/react"

export const Filter = ({ setSelectedFilters }) => {
    const handleFilterChange = (filter) => {
      setSelectedFilters((prevFilters) => {
        if (prevFilters.includes(filter)) {
          return prevFilters.filter((f) => f !== filter);
        } else {
          return [...prevFilters, filter];
        }
      });
    };
  
    return (
      <Box borderRight='2px solid gray' w='15vw'>
        <Text fontSize='40px' fontWeight='600'>Filter</Text>
        <Stack mt={10}>
          <Checkbox size='lg' colorScheme='green' justifySelf='center' onChange={() => handleFilterChange('Delivery')}>
            <Text fontSize='larger'>Delivery</Text>
          </Checkbox>
          <Checkbox size='lg' colorScheme='green' onChange={() => handleFilterChange('Expensive')}>
            <Text fontSize='larger'>Expensive</Text>
          </Checkbox>
          <Checkbox size='lg' colorScheme='green' onChange={() => handleFilterChange('Best-selling')}>
            <Text fontSize='larger'>Best-selling</Text>
          </Checkbox>
        </Stack>
      </Box>
    );
  };