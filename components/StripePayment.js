import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import InjectCheckout from './CreditCard';
import axios from 'axios';
import Cookies from 'js-cookie';

const stripePromise = loadStripe("pk_test_51KmaQ3SD8ACl6RuLXXgQ3FWBarDiaU0KsOzH2ejcZBCbySuSad6I5rKN1LPDn6T4z5sH2lkyMJl9JTjagnazKDXn00E9HorWiH");

const StripePayment = ({ isStripeVisible, isCheckout, products }) => {

  const handlePayout = async (childData) => {
    const headers = {
      headers: {
        "Content-type": "application/json",
        "codeswear-token": Cookies.get('codeswear-token')
      }
    };
    await axios.post(`http://localhost:3000/api/payment/stripe`, { ...childData, ...products }, headers).then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error.message);
    })

  };

  return (
    <div>
      <div className='product'>
        <Elements stripe={stripePromise}>
          <div className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-50 ${isStripeVisible ? "" : "hidden"}`}>
            <div className="bg-white rounded-lg pb-6 px-5 w-1/3" >
              <i className="fa fa-window-close my-5 cursor-pointer" style={{ fontSize: "22px", color: "red", display: "flex", justifyContent: "end" }} onClick={isCheckout}></i>
              <InjectCheckout handlePayout={handlePayout} />
            </div>
          </div>
        </Elements>
      </div>
    </div>
  )
}

export default StripePayment;
