import { useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";

const OrderConfirmation = () => {
  const { cartItems, totalPrice } = useCart();

  useEffect(() => {
    document.title = "Order Confirmation | CICO Pipes";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">
              Thank you for your order! We'll be in touch with payment instructions shortly.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent>
              <h2 className="text-xl font-medium text-gray-900 mb-4">Order Summary</h2>
              
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.quantity} × ₦{item.product.price.toLocaleString()}
                    </p>
                  </div>
                  <span className="text-gray-900">
                    ₦{(item.product.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Subtotal</span>
                  <span className="text-sm font-medium">₦{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Total</span>
                  <span className="text-lg font-bold">₦{totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center space-x-4">
            <Link to="/">
              <Button variant="outline">Continue Shopping</Button>
            </Link>
            <Link to="/cart">
              <Button variant="outline">View Cart</Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
