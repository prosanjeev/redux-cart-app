import { Box } from "@chakra-ui/react"
import ProductGrid from "./components/ProductGrid"

const Category = () => {
  return (
    <Box w={{base:'80vw', md:'80vw'}} mx='auto' p={{base:'0', md:'5'}}  >
      
      <ProductGrid />
    </Box>

  )
}

export default Category

// src/components/CategoryPage.js
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setProducts } from '../../features/products/productsSlice';

// const CategoryPage = () => {
//   const dispatch = useDispatch();
//   const { selectedCategory, products } = useSelector((state) => state.products);

//   useEffect(() => {
//     // Fetch products for selected category and set them in the store
//     const fetchProducts = async () => {
//       // Fetch products from API based on selectedCategory
//       const productsData = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`);
//       const products = await productsData.json();
//       console.log('products', products);
//       dispatch(setProducts(products));
//     };

//     if (selectedCategory) {
//       fetchProducts();
//     }
//   }, [dispatch, selectedCategory]);

//   return (
//     <div>
//       <h1>selectedCategory</h1>
//       <h1>{selectedCategory}</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>{product.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CategoryPage;
