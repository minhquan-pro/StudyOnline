import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import CourseList from '../pages/CourseList';
import CourseDetail from '../pages/CourseDetail';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function AppRouter() {
  return (
    <HashRouter>
      <CartProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </CartProvider>
    </HashRouter>
  );
}
