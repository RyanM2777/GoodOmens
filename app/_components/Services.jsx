import React from 'react'

function Services() {
  return (
        <div className="min-h-screen bg-tealGreen-100 flex items-center justify-center">
        <div className="bg-tealGreen-100 max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid bg-tealGreen-100 grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        {/* First Card */}
        <div className="rounded-2xl border border-tealGreen-500 p-6 shadow-sm ring-1 ring-tealGreen-500 sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
              Piercings
              <span className="sr-only">Services</span>
            </h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">  </strong>
              <span className="text-sm font-medium text-gray-700"></span>
            </p>
          </div>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-tealGreen-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700"> Needles Only, No Guns! </span>
            </li>
            <li className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-tealGreen-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700"> Change Jewellery </span>
            </li>
            <li className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-tealGreen-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700"> Under 16, Ears Only </span>
            </li>
            <li className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-tealGreen-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700"> Supply Your Own Jewellery </span>
            </li>
            <li className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-tealGreen-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700"> We Offer Jewellery </span>
            </li>
            <li className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-tealGreen-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700"> Gentle, You Won't Feel It </span>
            </li>
          </ul>
          <a href="/services/piercing" className="mt-8 block rounded-full border border-tealGreen-500 bg-tealGreen-500 px-12 py-3 text-center text-sm font-medium text-white hover:bg-tealGreen-600 hover:ring-1 hover:ring-tealGreen-600 focus:outline-none focus:ring active:text-tealGreen-400">
            Get Started
          </a>
        </div>

        {/* Second Card */}
        <div className="rounded-2xl border border-tealGreen-600 p-6 shadow-sm ring-1 ring-tealGreen-500 sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
              Tattoos
              <span className="sr-only"></span>
            </h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">  </strong>
              <span className="text-sm font-medium text-gray-700"></span>
            </p>
          </div>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-tealGreen-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700"> 18+ Only! </span>
            </li>
            <li className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-tealGreen-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700"> Bring a Friend </span>
            </li>
            <li className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-tealGreen-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700"> Friendly & Gentle </span>
            </li>
            <li className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-tealGreen-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700"> At Your Pace </span>
            </li>
            <li className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-tealGreen-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700"> Designs You Desire </span>
            </li>
            <li className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-tealGreen-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-gray-700"> Consultations </span>
            </li>
          </ul>
          <a href="/services/tattoos" className="mt-8 block rounded-full border border-tealGreen-400 bg-tealGreen-400 px-12 py-3 text-center text-sm font-medium text-white hover:bg-tealGreen-500 hover:ring-1 hover:ring-tealGreen-500 focus:outline-none focus:ring active:text-tealGreen-400">
            Get Started
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Services
