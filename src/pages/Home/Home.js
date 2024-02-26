import { HStack } from '@chakra-ui/react'
import Card from './components/Card'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, setCategories } from '../../features/products/productsSlice';
import { Link } from 'react-router-dom';

const Home = () => {

  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.products);


  // const [category, setCategory] = useState([]);
  // const [loding, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  

  useEffect(() => {
    // Fetch categories and set them in the store
    const fetchCategories = async () => {
      // Fetch categories from API
      const categoriesData = await fetch('https://fakestoreapi.com/products/categories');
      const categories = await categoriesData.json();
      dispatch(setCategories(categories));
    };

    fetchCategories();
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    // Set selected category in the store
    dispatch(selectCategory(category));
  };


  return (
    <HStack h={{md:'80vh', }} w='80vw' gap={8} justify='center' flexWrap='wrap' mx='auto'>
       {categories?.map((category)=>( 
        <Link to="/category" key={category}>
         <Card category={category}    onClick={() => handleCategoryClick(category)}/>
        </Link>
         
       ))}

    </HStack>
  )
}

export default Home