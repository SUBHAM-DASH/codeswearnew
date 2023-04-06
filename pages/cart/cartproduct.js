import React from 'react'

const CartProduct = () => {
  return (
    <div className='py-20 h-full'>
      <section className="text-gray-600 body-font">
        <h1 className='text-center text-xl mt-6'> Cart Products</h1>
        <h3 className="text-end right-8 font-bold absolute text-xl">Total Amt:-  1200/-</h3>
        <div className="container px-3 py-8 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-6 md:w-1/3">
              <div className="flex rounded-lg bg-gray-100 w-[300px] p-4 space-y-4 flex-col">
                <div className="flex items-center  mb-3">
                  <div className="w-32 h-36 mr-3 inline-flex items-center justify-center rounded-full">
                    <img src='https://m.media-amazon.com/images/I/61rSf7lBx1L._UL1300_.jpg' alt='cartimg' />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Neptune</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">Blue Gastropub indxgo juice poutine.</p>
                  <div className='flex mt-6'>
                    <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-sm">Remove Cart</button>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-sm">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CartProduct;
