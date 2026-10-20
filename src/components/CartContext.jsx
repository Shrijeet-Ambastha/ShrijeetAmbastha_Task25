import React, { createContext, useContext, useState } from 'react';

// Create the Context
const CartContext = createContext();

// Create a Provider Component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // 1. Add item to cart (or increase quantity if it already exists)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // 2. Remove or decrease item quantity
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Remove completely if quantity hits 0
    );
  };

  // 3. Clear Cart
  const clearCart = () => setCartItems([]);

  // 4. Calculate Total Price dynamically
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 5. Calculate Total Items Count
  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, totalPrice, totalItemsCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook for easy consumption in other components
export function useCart() {
  return useContext(CartContext);
}
