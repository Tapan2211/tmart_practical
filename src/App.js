import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import ProductList from './components/productList/ProductList';
import Home from './components/home/Home';
import Cartitem from './components/CartItem/CartItem';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import UsersPage from './pages/Users/Users';
import OrderPlaced from './pages/OrderPlace/OrderPlaced';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cartitem />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
      </Routes>
    </Router>
  );
}

export default App;
