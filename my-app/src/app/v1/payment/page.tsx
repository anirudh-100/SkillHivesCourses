'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/router

const PaymentPage = () => {
  const router = useRouter();
  const [plan, setPlan] = useState<string>(''); 
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const planSelected = params.get('plan');
    if (planSelected) {
      setPlan(planSelected);
      switch (planSelected) {
        case 'basic':
          setPrice(999);
          break;
        case 'premium':
          setPrice(1999);
          break;
        case 'pro':
          setPrice(2499);
          break;
        default:
          setPrice(0);
          break;
      }
    }
  }, []);

  const handlePayment = () => {
    router.push('/v1/qr-scan'); // Navigate to QR Scanner page instead of payment
  };

  return (
    <div className="flex flex-col items-center p-8 max-w-6xl mx-auto bg-white">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {plan.charAt(0).toUpperCase() + plan.slice(1)} Plan
        </h2>
        <p className="text-xl font-semibold text-gray-800">₹{price}</p>
        <div className="mt-6">
          <button
            onClick={handlePayment}
            className="bg-green-500 text-white py-3 px-9 rounded-md hover:bg-green-600 transition duration-300 transform hover:scale-105 text-lg"
          >
            Scan QR Code to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
