"use client"
import React, { useState } from 'react';

function NewArtistInfo() {
  const [showLaurenDetails, setShowLaurenDetails] = useState(false);
  const [showEmilyDetails, setShowEmilyDetails] = useState(false);
  const [showStevenDetails, setShowStevenDetails] = useState(false);
  const [showIainDetails, setShowIainDetails] = useState(false);

  const toggleLaurenDetails = () => setShowLaurenDetails(prevState => !prevState);
  const toggleEmilyDetails = () => setShowEmilyDetails(prevState => !prevState);
  const toggleStevenDetails = () => setShowStevenDetails(prevState => !prevState);
  const toggleIainDetails = () => setShowIainDetails(prevState => !prevState);

  return (
    <section className="bg-tealGreen-100">
      <div
        className="flex items-center gap-4 bg-tealGreen-100 mb-4 cursor-pointer"
        onClick={toggleLaurenDetails}
      >
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-700">Lauren &#8595;</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
      {showLaurenDetails && (
        <div className="col-span-2">
          <dl className="-my-3 divide-y divide-gray-300 text-sm">
            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Name</dt>
              <dd className="text-gray-700 sm:col-span-2">Lauren</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Media Tag</dt>
              <dd className="text-gray-700 sm:col-span-2">@LaurenMcneeTattoo</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Bio</dt>
              <dd className="text-gray-700 sm:col-span-2">
                Lauren started off tattooing in 2017, and quickly found her niche. She loves tattooing a variety of styles, whether its bright fun cartoons or dark and creepy skulls. Realism, neo traditional and ornamental work is where she thrives, so book her up for any portraits, flowers, or anything fun and weird!
              </dd>
            </div>
          </dl>
          <div className="grid grid-cols-1 gap-4 mt-3 bg-tealGreen-100 sm:grid-cols-2 md:grid-cols-3">
            {["1.jpeg", "2.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg"].map((src, index) => (
              <div key={index}>
                <img
                  className="object-cover object-center w-full h-45 max-w-full rounded-lg bg-tealGreen-100"
                  src={`/Lauren/${src}`}
                  alt="gallery-photo"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-4 bg-tealGreen-100 mb-4 cursor-pointer" onClick={toggleEmilyDetails}>
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-700">Emily &#8595;</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
      {showEmilyDetails && (
        <div className="col-span-2">
          <dl className="-my-3 divide-y divide-gray-300 text-sm">
            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Name</dt>
              <dd className="text-gray-700 sm:col-span-2">Emily</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Media Tag</dt>
              <dd className="text-gray-700 sm:col-span-2">@hvntertattoos</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Bio</dt>
              <dd className="text-gray-700 sm:col-span-2">
                Emily started learning to tattoo 7 years ago in Glasgow before taking time out to get a degree in Computer Arts, specialising in 3D environment art for video games. She's been been back tattooing for over a year now and mainly works in illustrative blackwork, but is happy to work with other styles. Emily loves to tattoo all things gothic, horror and spooky, but also anything video games or simpsons themed, or all of the above combined!
              </dd>
            </div>
          </dl>
          <div className="grid mt-3 grid-cols-1 gap-4 bg-tealGreen-100 sm:grid-cols-2 md:grid-cols-3">
            {["1.jpeg", "2.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg"].map((src, index) => (
              <div key={index}>
                <img
                  className="object-cover object-center w-full h-45 max-w-full rounded-lg"
                  src={`/Emily/${src}`}
                  alt="gallery-photo"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-4 bg-tealGreen-100 mb-4 cursor-pointer" onClick={toggleStevenDetails}>
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-700">Steven &#8595;</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
      {showStevenDetails && (
        <div className="col-span-2">
          <dl className="-my-3 divide-y divide-gray-300 text-sm">
            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Name</dt>
              <dd className="text-gray-700 sm:col-span-2">Steven</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Media Tag</dt>
              <dd className="text-gray-700 sm:col-span-2">@stevenblance</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Bio</dt>
              <dd className="text-gray-700 sm:col-span-2">
                Steven is a versatile and established artist with over a decade in the tattoo industry. With a previous history in fine art, Steven found his way into tattooing through portraiture and realism. Fueling his desire to learn, he's worked all over; from his home town of Dunfermline, to Glasgow, London and as far as California. Focusing on neo traditional, and with a background in realism and portraiture - Steven is equipped to take on any tattoo idea you might have.
              </dd>
            </div>
          </dl>
          <div className="grid mt-3 grid-cols-1 gap-4 bg-tealGreen-100 sm:grid-cols-2 md:grid-cols-3">
            {["1.jpg", "2.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"].map((src, index) => (
              <div key={index}>
                <img
                  className="object-cover object-center w-full h-45 max-w-full rounded-lg"
                  src={`/Steven/${src}`}
                  alt="gallery-photo"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-4 bg-tealGreen-100 cursor-pointer" onClick={toggleIainDetails}>
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-700">Iain &#8595;</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
      {showIainDetails && (
        <div className="col-span-2">
          <dl className="-my-3 divide-y divide-gray-300 text-sm">
            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Name</dt>
              <dd className="text-gray-700 sm:col-span-2">Iain</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Media Tag</dt>
              <dd className="text-gray-700 sm:col-span-2">@baillieart</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Bio</dt>
              <dd className="text-gray-700 sm:col-span-2">
                Iain got into tattooing after working as an illustrator and artist for years. Working as a concept artist in the video game industry led him to create unique tattoo designs, as he wanted to bring some of that same creativity and imagination to body art. Specializing in illustrative black and grey tattoos, Iain enjoys creating detailed and dynamic pieces that tell a story. Whether it's a fantasy scene or a realistic portrait, he's always up for a challenge.
              </dd>
            </div>
          </dl>
          <div className="grid mt-3 grid-cols-1 gap-4 bg-tealGreen-100 sm:grid-cols-2 md:grid-cols-3">
            {["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"].map((src, index) => (
              <div key={index}>
                <img
                  className="object-cover object-center w-full h-45 max-w-full rounded-lg"
                  src={`/Iain/${src}`}
                  alt="gallery-photo"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default NewArtistInfo;
