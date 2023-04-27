import React, { useState } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';


const ProductDeliveryAddress = () => {
    const [addressForm, setAddressForm] = useState({
        fullname: "",
        mobilenumber: "",
        pincode: "",
        post: "",
        city: "",
        district: "",
        nearbylocation: ""
    });
    const field = fields();
    const router = useRouter();
    const productData = JSON.parse(router.query.product);
    const handleSubmit = (e) => {
        e.preventDefault();
        const headers = {
            headers: {
                "Content-Type": "application/json",
                "codeswear-token": Cookies.get('codeswear-token')
            }
        };
        const data = {
            ...addressForm,
            productData: productData,
        }
        axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/users/adduserdeliveryaddress`, data, headers).then((response) => {
            //after payment successful that response will come
            console.log(response);
        }).catch((error) => {
            console.log(error.message);
        });

        setAddressForm({
            fullname: "",
            mobilenumber: "",
            pincode: "",
            post: "",
            city: "",
            district: "",
            nearbylocation: ""
        });
    }



    const handleOnchange = (e) => {
        setAddressForm({ ...addressForm, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className='shadow-2xl w-[60%] py-20 my-6 m-auto'>
                <h2 className='m-auto font-bold text-center  text-gray-500'>Enter Delivery Address</h2>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-wrap justify-around m-auto'>
                        {
                            field && field.map((item, index) => {
                                return (
                                    <div key={index} className='relative w-[40%] mb-3 my-3'>
                                        {
                                            item.type === "text" &&
                                            <div>
                                                <input
                                                    type={item.type}
                                                    className={item.inpclass}
                                                    id={item.name}
                                                    name={item.name}
                                                    value={item.name == 'fullname' ? addressForm.fullname : item.name == 'mobilenumber' ? addressForm.mobilenumber : item.name == 'pincode' ? addressForm.pincode : item.name == 'post' ? addressForm.post : item.name == 'city' ? addressForm.city : item.name == 'district' ? addressForm.district : ''}
                                                    onChange={(e) => handleOnchange(e)}
                                                    placeholder={item.label} />
                                                <label
                                                    htmlFor={item.name}
                                                    className={item.labelclass}
                                                >{item.label}...
                                                </label>
                                            </div>
                                        }
                                        {
                                            item.type === "textarea" && <div className="relative mb-3 w-full">
                                                <textarea
                                                    className={item.inpclass}
                                                    rows="3"
                                                    name={item.name}
                                                    onChange={(e) => handleOnchange(e)}
                                                    value={item.name == 'nearbylocation' ? addressForm.nearbylocation : ''}
                                                    placeholder={item.label}></textarea>
                                                <label
                                                    htmlFor={item.name}
                                                    className={item.labelclass}
                                                >{item.label}</label
                                                >
                                            </div>
                                        }
                                    </div>
                                )

                            })
                        }
                    </div>
                    <div className='text-center'>
                        <button type='submit' className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Place Order
                            <FontAwesomeIcon className='mx-2' icon={faShoppingCart} />
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProductDeliveryAddress;

function fields() {
    let inpBoxs = [
        {
            name: "fullname",
            label: "Full Name",
            type: "text",
            isDesable: "false",
            value: "",
            inpclass: "peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",
            labelclass: "pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        },
        {
            name: "mobilenumber",
            label: "Mobile Number",
            type: "text",
            isDesable: "false",
            value: "",
            inpclass: "peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",
            labelclass: "pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        },
        {
            name: "pincode",
            label: "Pincode",
            type: "text",
            isDesable: "false",
            value: "",
            inpclass: "peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",
            labelclass: "pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        },
        {
            name: "post",
            label: "Post",
            type: "text",
            isDesable: "false",
            value: "",
            inpclass: "peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",
            labelclass: "pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        },
        {
            name: "city",
            label: "City",
            type: "text",
            isDesable: "false",
            value: "",
            inpclass: "peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",
            labelclass: "pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        },
        {
            name: "district",
            label: "District",
            type: "text",
            isDesable: "false",
            value: "",
            inpclass: "peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",
            labelclass: "pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        },
        {
            name: "nearbylocation",
            label: "Near By Location",
            type: "textarea",
            isDesable: "false",
            value: "",
            inpclass: "peer block min-h-[auto] w-full rounded border-1 border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0",
            labelclass: "pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        },
    ]
    return inpBoxs;
}
