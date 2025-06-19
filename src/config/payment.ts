export interface PaymentConfig {
  paystack: {
    publicKey: string;
  };
  flutterwave: {
    publicKey: string;
    currency: string;
    country: string;
    paymentOptions: string;
    customizations: {
      title: string;
      description: string;
      logo: string;
    };
  };
}

export const PAYMENT_CONFIG: PaymentConfig = {
  paystack: {
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_000000000000000000000000'
  },
  flutterwave: {
    publicKey: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY || 'FLWPUBK_TEST-000000000000000000000000-X',
    currency: 'NGN',
    country: 'NG',
    paymentOptions: 'card,banktransfer',
    customizations: {
      title: 'CICO Pipes Payment',
      description: 'Payment for PVC Pipes Order',
      logo: '/logo.png'
    }
  }
};
