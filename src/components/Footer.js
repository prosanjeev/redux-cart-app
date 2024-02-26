import { Box } from '@chakra-ui/react';

function Footer() {
    return (
        <Box
            as="footer"
            textAlign="center"
            mt={4}
            py={4}
            bg="gray.200"
            color="gray.600"
            fontSize="sm"
        >
            &copy; 2024 prosanjeev. All rights reserved.
        </Box>
    );
}

export default Footer;
