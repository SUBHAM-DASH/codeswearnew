import React from 'react';
import Link from 'next/link';
import Products from '@/models/Products';
import { connectToMongoDb } from '@/database/connectToDatabase';

const Jeans = ({ products }) => {
  let myProducts = JSON.parse(products);
  return (
    <div className='py-10 h-full'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            {
              myProducts.map((item) => {
                return (
                  <div key={item._id}>
                    <Link href={`/product/${item._id}`} className="lg:w-1/4 md:w-1/3 p-3 space-y-3 space-x-12 shadow-inner my-3 w-full">
                      <div className="block relative h-[270px] w-[300px] rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover px-4 object-center w-full h-full block" src={item.image} />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</h3>
                        <h2 className="text-gray-900 title-font text-sm font-medium">{item.title.slice(0, 40)}</h2>
                        <p className="mt-1">₹ {item.price}.00</p>
                      </div>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}
export default Jeans;


export async function getStaticProps() {
  await connectToMongoDb();
  const products = await Products.find({ category: "jeans" });
  return {
    props: {
      products: JSON.stringify(products),
    },
  };
}

