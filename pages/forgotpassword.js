import React, { useState } from 'react';


const ForgotPassword = () => {
  const [inpVal, setInpVal] = useState('');

  const handleOnChange = (e) => {
    setInpVal(e.target.value);
  }


  const handleOnclick = ()=>{
    console.log(inpVal);
  }

  return (
    <div className="h-screen flex  items-center justify-center">
      <img
        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
        className="w-[40%]"
        alt="Phone image" />
      <div className="relative rounded-md w-1/2 mx-auto flex items-center shadow-xl justify-center p-10">
        <span className="absolute inset-y-0 left-10 flex items-center">
          <i className="material-icons text-blue-600" style={{ fontSize: '32px' }}>email</i>
        </span>
        <input onChange={handleOnChange} value={inpVal} className="py-1 pl-10 pr-4 block w-full rounded-md border-transparent hover:border-blue-500 focus:outline-none focus:ring-0 border-2 px-5"
          placeholder="Enter your email."
          type="email" />
        <div>
          <button
            onClick={handleOnclick}
            type="button"
            className="inline-block rounded mx-1 bg-blue-600 px-6 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600  hover:bg-purple-600">
            send
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword;
