import { connectToMongoDb } from '@/database/connectToDatabase';
import Products from '@/models/Products';
import Link from 'next/link'
import React from 'react'

const Mugs = ({ products }) => {
  const mugs = JSON.parse(products);

  return (
    <div className='py-10 h-full'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              mugs.map((item) => {
                return (
                  <div key={item._id}>
                    <Link href={`/product/${item._id}`} className="lg:w-1/4 md:w-1/3 p-3 space-y-3 space-x-10 shadow-inner my-3 w-full">
                      <div className="block relative h-[270px] rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover px-4 object-center w-full h-full block" src={item.image} />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</h3>
                        <h2 className="text-gray-900 title-font text-sm font-medium">{item.title.slice(0,40)}</h2>
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

export default Mugs;

export async function getStaticProps() {
  await connectToMongoDb();
  const products = await Products.find({ category: "mugs" });
  return {
    props: {
      products: JSON.stringify(products),
    },
  };
}

