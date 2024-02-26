import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import Category from "./pages/Category/Category";
import CheckoutPage from "./pages/Checkout/Checkout ";

import Home from "./pages/Home/Home";

function App() {

  return (
    <ChakraProvider >
       
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='' element={<Home/>} />
              {/* <Route path='/category' element={<CategoryPage/>} /> */}
              <Route path='/category/' element={<Category />} />
              <Route path='/checkout' element={<CheckoutPage />} />
            </Route>
          </Routes>
        </Router>
        
    </ChakraProvider>
  );
}

export default App;
