import React from "react";

const Hero = () => {
  return (
    <section className="bg-tealGreen-100">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl text-black">
            Good Omens Tattoo and Piercing
          </h1>
          <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl">
            Welcome to Good Omens, Dundee&#39;s Premier Tattoo & Piercing Studio!

               Our talented artists and piercers are dedicated to transforming your visions into stunning works of art. Whether you&#39;re seeking a bold new tattoo, a delicate piece of body art, or a stylish piercing, we are here to provide exceptional quality and unparalleled creativity. 
          </p>
          <a
            href="/services"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-tealGreen-400 hover:tealGreen-300 focus:ring-4 focus:ring-tealgreen-300"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-tealGreen-400 border border-tealGreen-400 rounded-lg hover:bg-tealGreen-400 hover:text-white focus:ring-4 focus:ring-tealGreen-300 "
          >
            Speak to Us
          </a>
        </div>
       <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/goodomens.jpg" alt="Store Front" className="rounded-lg shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
