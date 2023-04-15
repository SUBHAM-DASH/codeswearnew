import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { connectToMongoDb } from '@/database/connectToDatabase';
import Products from '@/models/Products';

const productId = ({ product,pincodes }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [pincode, setPinCode] = useState("");

  const serverProps = JSON.parse(product);
  const pins = JSON.parse(pincodes);

  const addToCart = () => {
    router.push("/cart/cartproduct");
  }

  const handleChange = (e) => {
    setPinCode(e.target.value);
    if (e.target.value.length === 6) {
      if (pins.includes(e.target.value)) {
        toast.success("Product is availability to your place.", {
          position: toast.POSITION.TOP_RIGHT
        });
        setTimeout(() => {
          setPinCode("");
        }, 1000);
      } else {
        toast.error("sorry...product is not available to your place.", {
          position: toast.POSITION.TOP_RIGHT
        });
        setTimeout(() => {
          setPinCode("");
        }, 1000);
      }
    }
  }

  return (
    <div>
      <ToastContainer />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 pt-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/3 w-[300px] lg:h-[370px] object-center rounded" src={serverProps.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 h-[400px] lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-2xl title-font text-gray-500 tracking-widest">{serverProps.category.charAt(0).toUpperCase() + serverProps.category.slice(1)}</h2>
              <h1 className="text-gray-900 text-md title-font font-medium mb-1">{serverProps.title}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </span>
              </div>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {
                    serverProps.color.map((clr, index) => {
                      return (
                        <div key={index}>
                          <button className={`border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none ${clr === 'blue' ? 'bg-blue-700' : clr === 'white' ? 'bg-slate-100' : clr === 'red' ? 'bg-red-700' : clr === 'black' ? 'bg-black' : `bg-${clr}-700`}`}></button>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      {
                        serverProps.size.map((opt, index) => {
                          return (
                            <option key={index}>{opt}</option>
                          )
                        })
                      }
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex mt-16">
                <span className="title-font font-medium text-2xl text-gray-900">₹ {serverProps.price}.00</span>
                <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded text-sm" onClick={addToCart}>Add To Cart</button>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-sm">Checkout</button>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center mb-4 space-x-3 ml-40'>
          <input placeholder='Check Availability To Your Place...' value={pincode} onChange={handleChange} className='border-2 text-sm w-1/3 py-2 px-2 rounded-md border-orange-400' />
        </div>
      </section>
    </div>
  )
}

export default productId;

export async function getServerSideProps(context) {
  const { productid } = context.query;
  // Check if the cookie is available in the incoming request
  const codeswearToken = context.req.cookies['codeswear-token'];

  await connectToMongoDb();
  const product = await Products.findOne({ _id: productid });
  const fetchData = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincodes`);
  const pincodes = await fetchData.json();

  return { props: { product: JSON.stringify(product), pincodes: JSON.stringify(pincodes.pincodes) } };
}
