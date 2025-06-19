import React, { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { PAYMENT_CONFIG } from "@/config/payment";
import { initializePaystackPayment, initializeFlutterwavePayment } from "@/utils/payment";

interface PaymentFormData {
  paymentMethod: string;
}

interface BankTransferProof {
  file: File | null;
  bankDetails: {
    accountNumber: string;
    bankName: string;
    accountName: string;
  };
}

const Payment = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  // Add payment gateway scripts with retry mechanism
  React.useEffect(() => {
    const loadScript = (src: string, isPaystack: boolean) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        
        script.onload = () => {
          console.log(`${isPaystack ? 'Paystack' : 'Flutterwave'} script loaded successfully`);
          resolve(true);
        };
        
        script.onerror = () => {
          console.error(`Failed to load ${isPaystack ? 'Paystack' : 'Flutterwave'} script`);
          reject(new Error(`Failed to load ${isPaystack ? 'Paystack' : 'Flutterwave'} script`));
        };
        
        document.body.appendChild(script);
      });
    };

    const loadPaystack = async () => {
      try {
        await loadScript('https://js.paystack.co/v1/inline.js', true);
        setIsPaystackReady(true);
      } catch (error) {
        console.error('Error loading Paystack:', error);
        toast.error('Failed to load Paystack payment gateway. Please refresh the page.');
      }
    };

    const loadFlutterwave = async () => {
      try {
        await loadScript('https://checkout.flutterwave.com/v3.js', false);
        setIsFlutterwaveReady(true);
      } catch (error) {
        console.error('Error loading Flutterwave:', error);
        toast.error('Failed to load Flutterwave payment gateway. Please refresh the page.');
      }
    };

    // Load both scripts
    loadPaystack();
    loadFlutterwave();

    return () => {
      // Clean up scripts
      const scripts = document.querySelectorAll('script[src="https://js.paystack.co/v1/inline.js"], script[src="https://checkout.flutterwave.com/v3.js"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  const [formData, setFormData] = useState<PaymentFormData>({
    paymentMethod: "bank_transfer",
  });

  const [isPaystackReady, setIsPaystackReady] = useState(false);
  const [isFlutterwaveReady, setIsFlutterwaveReady] = useState(false);

  const [bankTransferProof, setBankTransferProof] = useState<BankTransferProof>({
    file: null,
    bankDetails: {
      accountNumber: "",
      bankName: "",
      accountName: "",
    },
  });

  const [orderData, setOrderData] = useState<any>(null);

  // Load order data from localStorage
  React.useEffect(() => {
    const savedOrder = localStorage.getItem('currentOrder');
    if (savedOrder) {
      setOrderData(JSON.parse(savedOrder));
    }
  }, []);

  const handlePayment = async () => {
    try {
      if (!orderData) {
        throw new Error("Order data not found");
      }

      if (formData.paymentMethod === "bank_transfer") {
        if (!bankTransferProof) {
          throw new Error("Please upload proof of payment");
        }
        
        // TODO: Implement actual bank transfer proof upload
        // For now, we'll simulate success
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else if (formData.paymentMethod === "paystack") {
        // Wait for Paystack script to load
        if (!isPaystackReady) {
          toast.error('Paystack is still loading. Please wait a moment and try again.');
          return;
        }

        // Wait a bit for the Paystack object to be ready
        const waitForPaystack = async () => {
          let attempts = 0;
          const maxAttempts = 10;
          const delay = 500; // 500ms delay between attempts

          while (attempts < maxAttempts) {
            if (typeof window.PaystackPop !== 'undefined') {
              console.log('PaystackPop is ready after', attempts * delay, 'ms');
              return true;
            }
            attempts++;
            await new Promise(resolve => setTimeout(resolve, delay));
          }
          console.error('PaystackPop not ready after', maxAttempts * delay, 'ms');
          return false;
        };

        // Check if Paystack is ready
        if (!await waitForPaystack()) {
          toast.error('Paystack payment gateway is not available. Please refresh the page.');
          return;
        }

        // Initialize Paystack payment
        const paystackConfig = {
          key: PAYMENT_CONFIG.paystack.publicKey,
          email: orderData.formData.email,
          amount: totalPrice * 100, // Convert to kobo
          reference: `CICO-${Date.now()}`,
          onSuccess: (reference: string) => {
            // Clear cart and localStorage after successful payment
            clearCart();
            localStorage.removeItem('currentOrder');
            
            // Navigate to order confirmation
            navigate('/order-confirmation');
            toast.success('Payment successful! Your order has been placed.');
          },
          onClose: () => {
            toast.error('Payment cancelled');
          }
        };

        // Try to initialize Paystack payment
        try {
          console.log('Attempting to initialize Paystack with config:', paystackConfig);
          
          if (typeof window.PaystackPop === 'undefined') {
            console.error('PaystackPop is not available on window object');
            throw new Error('PaystackPop is not available');
          }

          const paystack = new window.PaystackPop();
          console.log('PaystackPop instance created');
          
          paystack.newTransaction(paystackConfig);
          console.log('Paystack transaction initialized successfully');
        } catch (error) {
          console.error('Paystack initialization error:', error);
          console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            type: typeof error
          });
          
          if (error.message?.includes('PaystackPop')) {
            toast.error('Paystack payment gateway is not available. Please refresh the page.');
          } else {
            toast.error('Error initializing payment. Please check your internet connection and try again.');
          }
        }

      } else if (formData.paymentMethod === "flutterwave") {
        // Wait for Flutterwave script to load
        if (!isFlutterwaveReady) {
          toast.error('Flutterwave is still loading. Please wait a moment and try again.');
          return;
        }

        // Initialize Flutterwave payment
        const flutterwaveConfig = {
          public_key: PAYMENT_CONFIG.flutterwave.publicKey,
          tx_ref: `CICO-${Date.now()}`,
          amount: totalPrice,
          currency: PAYMENT_CONFIG.flutterwave.currency,
          country: PAYMENT_CONFIG.flutterwave.country,
          payment_options: PAYMENT_CONFIG.flutterwave.paymentOptions,
          customer: {
            email: orderData.formData.email,
            name: orderData.formData.name,
            phone_number: orderData.formData.phone
          },
          callback: (response: any) => {
            // Clear cart and localStorage after successful payment
            clearCart();
            localStorage.removeItem('currentOrder');
            
            // Navigate to order confirmation
            navigate('/order-confirmation');
            toast.success('Payment successful! Your order has been placed.');
          },
          customizations: PAYMENT_CONFIG.flutterwave.customizations,
          onclose: () => {
            toast.error('Payment cancelled');
          }
        };

        // Try to initialize Flutterwave payment
        try {
          console.log('Attempting to initialize Flutterwave with config:', flutterwaveConfig);
          
          if (typeof window.FlutterwaveCheckout === 'undefined') {
            console.error('FlutterwaveCheckout is not available on window object');
            throw new Error('FlutterwaveCheckout is not available');
          }

          window.FlutterwaveCheckout(flutterwaveConfig);
          console.log('Flutterwave transaction initialized successfully');
        } catch (error) {
          console.error('Flutterwave initialization error:', error);
          console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            type: typeof error
          });
          
          if (error.message?.includes('FlutterwaveCheckout')) {
            toast.error('Flutterwave payment gateway is not available. Please refresh the page.');
          } else {
            toast.error('Error initializing payment. Please check your internet connection and try again.');
          }
        }
      }
    } catch (error) {
      toast.error('Payment failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Payment</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div>
              <h2 className="text-xl font-medium text-gray-900 mb-4">Order Summary</h2>
              {cartItems.map((item) => (
                <Card key={item.product.id} className="mb-4">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium text-gray-900 truncate">
                          {item.product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.quantity} × ₦{item.product.price.toLocaleString()}
                        </p>
                      </div>
                      <span className="text-gray-900">
                        ₦{(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Subtotal</span>
                  <span className="text-sm font-medium">₦{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Total</span>
                  <span className="text-lg font-bold">₦{totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Method
                  </label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) => setFormData(prev => ({ ...prev, paymentMethod: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="bank_transfer">Bank Transfer</option>
                    <option value="paystack">Paystack</option>
                    <option value="flutterwave">Flutterwave</option>
                  </select>
                </div>

                {formData.paymentMethod === "bank_transfer" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bank Transfer Details
                    </label>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">
                          Bank Name: Access Bank
                          <br />
                          Account Number: 0123456789
                          <br />
                          Account Name: CICO Pipes Limited
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Upload Proof of Payment
                        </label>
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setBankTransferProof({
                                file: e.target.files[0],
                                bankDetails: {
                                  accountNumber: "0123456789",
                                  bankName: "CICO Pipes Limited",
                                  accountName: "CICO Pipes Limited"
                                }
                              });
                            }
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handlePayment}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Complete Payment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;
