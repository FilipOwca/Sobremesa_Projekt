import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import SignUpPage from './pages/SignUpPage';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' exact element={<HomePage/>}/>
        <Route path='/services' element={<ServicesPage />}/>
        <Route path='/products' element={<ProductsPage />}/>
        <Route path='/sign-up' element={<SignUpPage />}/>
      </Routes>
      
      <Footer />

    </>
  );
}

export default App;
