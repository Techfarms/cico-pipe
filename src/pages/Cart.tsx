import { useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Minus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  useEffect(() => {
    document.title = "Cart | CICO Pipes";
    window.scrollTo(0, 0);
  }, []);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Add some PVC pipes to your cart to continue.</p>
            <Link to="/pvc-pipes" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

          {cartItems.map((item) => (
            <Card key={item.product.id} className="mb-4">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-gray-900 truncate">
                    {item.product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.product.specifications}
                  </p>
                  <div className="mt-2 flex items-center">
                    <Badge variant="secondary">{item.product.category}</Badge>
                    <span className="ml-2 text-sm text-gray-600">
                      ₦{item.product.price.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </Button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Total</h2>
              <span className="text-xl font-bold">₦{totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
              <Link to="/checkout" className="flex-1">
                <Button className="w-full">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
