import React from 'react'
import banner from '../../public/Books1.png';

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl dark:bg-stone-950 container mx-auto lg:px-20 px-4 flex flex-col lg:flex-row my-10">
        <div className="w-full order-2 lg:order-1 lg:w-1/2 dark:bg-stone-950 mt-12 lg:mt-36">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcome to your gateway to{" "}
              <span className="text-pink-500">
                endless adventures and timeless classics!
              </span>
            </h1>
            <p className="text-xl">
              Explore our vast collection of captivating stories and timeless
              classics. Dive into adventures, unravel mysteries, and find
              inspiration. Shop now and embark on your next unforgettable
              literary journey!
            </p>
            <label className="input input-bordered dark:bg-stone-950 dark:text-white flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow dark:text-white" placeholder="Email" />
            </label>
          </div>
          <button className="mt-6 btn btn-secondary">Secondary</button>
        </div>
        <div className=" order-1  w-full lg:w-1/2 flex justify-center mt-20">
            <img src={banner} className='w-90 h-90' alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner
