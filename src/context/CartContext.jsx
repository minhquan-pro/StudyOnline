import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [registeredCourses, setRegisteredCourses] = useState([]);

  const addToCart = (course) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === course.id)) return prev;
      return [...prev, course];
    });
  };

  const removeFromCart = (courseId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== courseId));
  };

  const registerCourse = (course) => {
    setRegisteredCourses((prev) => {
      if (prev.find((item) => item.id === course.id)) return prev;
      return [...prev, course];
    });
    removeFromCart(course.id);
  };

  const isInCart = (courseId) => cartItems.some((item) => item.id === courseId);
  const isRegistered = (courseId) => registeredCourses.some((item) => item.id === courseId);

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, registeredCourses, addToCart, removeFromCart, registerCourse, isInCart, isRegistered, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
