import React, { useEffect, useState } from 'react';
import { connectToMongoDb } from '@/database/connectToDatabase';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router';


const CartProduct = ({ carts }) => {
  const [cartItems, setCartItems] = useState(carts.length > 0 ? JSON.parse(carts) : []);
  const [price, setPrice] = useState(0);
  const router = useRouter();

  useEffect(() => {
    modifyData();
  }, [cartItems]);

  function modifyData() {
    let cost = 0
    cartItems.forEach(element => {
      cost += Number(element.price);
    });
    setPrice(cost);
  }



  const removeFromCart = (id) => {
    axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/cartdetails/removefromcart?id=${id}`, {
      headers: {
        "Content-type": "application/json",
        "codeswear-token": Cookies.get('codeswear-token')
      }
    }).then((response) => {
      if (response.data.status === "success") {
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT
        });
        setCartItems(response.data.carts);
      }
    }).catch((error) => {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    });
  }


  const handleClickBuy = () => {
    let productData = [];
    for (const item of cartItems) {
      let p = { productId: item._id, productSize: item.size, productColor: item.color, price: item.price };
      productData.push(p);
    }

    router.push({
      pathname: '/productdvyaddress',
      query: { product: JSON.stringify(productData) },
    });
  }

  return (
    <div className='py-20 h-full'>
      <ToastContainer />
      <section className="text-gray-600 body-font">
        <h1 className='text-center text-xl mt-6'> My Carts</h1>
        <div className="container px-3 py-8 mx-auto">
          <div className="flex flex-wrap m-4">
            {
              cartItems.map((item) => {
                return (
                  <div key={item._id} className="p-6 md:w-1/3">
                    <div className="flex rounded-lg bg-gray-100 w-[300px] p-4 space-y-4 flex-col">
                      <div className="flex items-center  mb-3">
                        <div className="w-32 h-36 mr-3 inline-flex items-center justify-center rounded-full">
                          <img src={item.image} alt='cart-img' />
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-medium">₹ {item.price}.00</h2>
                      </div>
                      <div className="flex-grow">
                        <p className="leading-relaxed text-base">{item.title.slice(0, 45)}...</p>
                        <p className='text-green-600 my-4'>5% instant discount on Axis card</p>
                        <div className='flex justify-center mt-6'>
                          <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-sm" onClick={() => { removeFromCart(item._id) }}>Remove Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <button className="flex m-auto text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-700 rounded text-sm" onClick={handleClickBuy}>Buy Now  ₹{price}.00</button>
        </div>
      </section>
    </div>
  )
}

export default CartProduct;

export async function getServerSideProps(context) {

  await connectToMongoDb();
  const headers = {
    "codeswear-token": context.req.cookies['codeswear-token']
  }
  const jsonData = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/cartdetails/getmycarts`, { headers });
  const carts = await jsonData.json();
  return {
    props: {
      carts: carts.status === "success" ? JSON.stringify(carts.carts) : []
    },
  };
}

