import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from './pages/ProductDetail';
import CreateProduct from './pages/CreateProduct';

export default function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/category/:category" element={<CategoryPage/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
      <Footer/>
    </Router>   
  )
}