import { PAYMENT_CONFIG } from "@/config/payment";
import { toast } from "sonner";

declare global {
  interface Window {
    PaystackPop: any;
    Flutterwave: any;
    FlutterwaveCheckout: (config: any) => void;
  }
}

interface PaymentConfig {
  email: string;
  amount: number;
  onSuccess: (reference: string) => void;
  onClose: () => void;
}

interface FlutterwaveConfig extends PaymentConfig {
  name: string;
  phone: string;
}

export const initializePaystackPayment = (
  email: string,
  amount: number,
  onSuccess: (reference: string) => void,
  onClose: () => void
) => {
  const paystackConfig = {
    ...PAYMENT_CONFIG.paystack,
    email,
    amount: amount * 100, // Convert to kobo
    reference: `CICO-${Date.now()}`,
    onSuccess,
    onClose
  };

  const button = document.createElement('button');
  button.innerHTML = 'Pay with Paystack';
  button.className = 'paystack-button';
  button.onclick = () => {
    if (typeof window.PaystackPop === 'undefined') {
      toast.error('Paystack payment service is not available');
      return;
    }
    
    const paystack = new window.PaystackPop();
    paystack.newTransaction(paystackConfig);
  };
  document.body.appendChild(button);
  
  // Remove the button after 5 seconds
  setTimeout(() => {
    document.body.removeChild(button);
  }, 5000);
};

export const initializeFlutterwavePayment = (
  email: string,
  amount: number,
  name: string,
  phone: string,
  onSuccess: (response: any) => void,
  onClose: () => void
) => {
  const flutterwaveConfig = {
    ...PAYMENT_CONFIG.flutterwave,
    tx_ref: `CICO-${Date.now()}`,
    amount,
    customer: {
      email,
      name,
      phone_number: phone
    },
    callback: onSuccess,
    onclose: onClose
  };

  const button = document.createElement('button');
  button.innerHTML = 'Pay with Flutterwave';
  button.className = 'flutterwave-button';
  button.onclick = () => {
    if (typeof window.Flutterwave === 'undefined') {
      toast.error('Flutterwave payment service is not available');
      return;
    }
    
    const flutterwave = new window.Flutterwave();
    flutterwave.initialize(flutterwaveConfig);
  };
  document.body.appendChild(button);
  
  // Remove the button after 5 seconds
  setTimeout(() => {
    document.body.removeChild(button);
  }, 5000);
};
