import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/products";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Load cart items from localStorage on component mount
  const savedCart = localStorage.getItem('cico-cart');
  const initialCartItems = savedCart ? JSON.parse(savedCart) : [];
  
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const addToCart = (product: Product, quantity: number) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(item => item.product.id === product.id);
      if (existingItemIndex >= 0) {
        const updatedItems = [...prev];
        updatedItems[existingItemIndex].quantity += quantity;
        localStorage.setItem('cico-cart', JSON.stringify(updatedItems));
        return updatedItems;
      }
      const newItems = [...prev, { product, quantity }];
      localStorage.setItem('cico-cart', JSON.stringify(newItems));
      return newItems;
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => {
      const updatedItems = prev.filter(item => item.product.id !== productId);
      localStorage.setItem('cico-cart', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems(prev => {
      const updatedItems = [...prev];
      const itemIndex = updatedItems.findIndex(item => item.product.id === productId);
      if (itemIndex >= 0) {
        updatedItems[itemIndex].quantity = quantity;
        localStorage.setItem('cico-cart', JSON.stringify(updatedItems));
      }
      return updatedItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cico-cart');
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.product.price * item.quantity),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartContext;
