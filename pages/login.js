import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router';
import { GoogleLogin } from 'react-google-login';

const Login = () => {

  const router = useRouter();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const headers = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/users/loginuser`, loginForm, headers).then((response) => {
      if (response.data.status === "success") {
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT
        });
        localStorage.setItem("codeswear-token", response.data.token);
        setLoginForm({ email: "", password: "" });
        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
    }).catch((error) => {
      console.log(error.message);
    })
  }

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <section className="h-screen">
        <ToastContainer />
        <Head>
          <title>Login</title>
        </Head>
        <div className="container w-[80%] m-auto h-full px-6 py-24">
          <div
            className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image" />
            </div>

            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form onSubmit={handleSubmit}>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput3"
                    name='email'
                    onChange={handleChange}
                    value={loginForm.email}
                    placeholder="Email address" required />
                  <label
                    htmlFor="exampleFormControlInput3"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                  >Email address
                  </label>
                </div>

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className="border-2 block min-h-[auto] w-full rounded bg-transparent px-3 py-1 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    id="exampleFormControlInput33"
                    name="password"
                    onChange={handleChange}
                    value={loginForm.password}
                    placeholder="Password" required />
                  <label
                    htmlFor="exampleFormControlInput33"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                  >Password
                  </label>
                </div>

                <div className="mb-6 flex items-center justify-between">
                  <Link href="/signup"
                    className="text-primary font-bold text-gray-500 cursor-pointer transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >Sign in</Link
                  >
                  <Link
                    href="/forgotpassword"
                    className="text-primary font-bold text-gray-500 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >Forgot password?</Link
                  >
                </div>
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-blue-600 px-7 py-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  Sign in
                </button>

                <div
                  className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p
                    className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                    OR
                  </p>
                </div>
                {facebookBtn()}
                {googleBtn()}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login;

function googleBtn() {

  const responseGoogle = (response) => {
    console.log(response);
  };

  const onFailure = (error) => {
    console.log(error);
    // handle login failure
  };


  return (
    <>
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}
            className="mb-3 flex w-full items-center justify-center rounded bg-blue-600 px-7 py-2 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
            href="#!"
            role="button"
            data-te-ripple-init
            data-te-ripple-color="light">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-6 h-5 fill-current text-white mr-4">
              <path
                d="M17.5,8c0-0.4,0-0.7,0-1H10V10h4.4c-0.2,1-0.8,1.8-1.7,2.4v2H15c1.2-1.1,2-2.6,2-4.4C17,8.9,17.3,8.5,17.5,8z"
              />
              <path
                d="M10,17c2.2,0,4.2-0.8,5.7-2.1l-2.8-2.1c-0.9,0.6-2,1-3,1c-2.4,0-4.4-1.6-5.1-3.8H2v2.4C3.5,15.7,6.1,17,10,17z"
              />
              <path
                d="M4.9,10.1c-0.2-0.6-0.3-1.2-0.3-1.9c0-0.7,0.1-1.3,0.3-1.9V3.9H2C0.9,5.5,0.2,7.5,0.2,9.7s0.7,4.2,1.8,6l3-2.3 C4.1,11.4,4.5,10.8,4.9,10.1z"
              />
              <path
                d="M10,2c-1.6,0-3.1,0.4-4.4,1.1l2.8,2.1c0.6-0.3,1.3-0.4,2-0.4c2.4,0,4.4,1.6,5.1,3.8H18v-2.4C16.5,4.3,13.9,3,10,3 C7.7,3,5.7,3.6,4.2,5L2,2.8C3.5,1.3,6.1,0,10,0C13.9,0,16.5,1.3,18,3v2.4c-0.6-2.2-2.6-3.8-5.1-3.8C11,1.6,10.3,1.7,9.7,2.1L6.9,0.1 C8.2,0.4,9.4,0.9,10,2z"
              />
            </svg>
            Continue with Google
          </button>
        )}
      />
    </>
  )
}

function facebookBtn() {
  return (
    <>
      <button
        className="mb-3 flex w-full items-center justify-center rounded bg-blue-600 px-7 py-2 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        href="#!"
        role="button"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-3.5 w-3.5"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
        Continue with Facebook
      </button>
    </>
  )
}
