"use client"
import React, { useState } from 'react';

function NewArtistInfo() {
  const [showLaurenDetails, setShowLaurenDetails] = useState(false);

  const toggleLaurenDetails = () => {
    setShowLaurenDetails(prevState => !prevState);
  };

  const [showEmilyDetails, setShowEmilyDetails] = useState(false);

  const toggleEmilyDetails = () => {
    setShowEmilyDetails(prevState => !prevState);
  };

  const [showStevenDetails, setShowStevenDetails] = useState(false);

  const toggleStevenDetails = () => {
    setShowStevenDetails(prevState => !prevState);
  };

  const [showIainDetails, setShowIainDetails] = useState(false);

  const toggleIainDetails = () => {
    setShowIainDetails(prevState => !prevState);
  };

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
            <div>
              <img className="object-cover object-center w-full h-45 max-w-full rounded-lg bg-tealGreen-100"
                src="/Lauren/1.jpeg"
                alt="gallery-photo" />
            </div>
            <div>
              <img className="object-cover object-center w-full h-45 max-w-full rounded-lg"
                src="/Lauren/2.jpeg"
                alt="gallery-photo" />
            </div>
            <div>
              <img className="object-cover object-center w-full h-45 max-w-full rounded-lg"
                src="/Lauren/4.jpeg"
                alt="gallery-photo" />
            </div>
            <div>
              <img className="object-cover object-center w-full h-45 max-w-full rounded-lg"
                src="/Lauren/5.jpeg"
                alt="gallery-photo" />
            </div>
            <div>
              <img className="object-cover object-center w-full h-45 max-w-full rounded-lg"
                src="/Lauren/6.jpeg"
                alt="gallery-photo" />
            </div>
            <div>
              <img className="object-cover object-center w-full h-45 max-w-full rounded-lg"
                src="/Lauren/7.jpeg" alt="gallery-photo" />
            </div>
            <div>
              <img className="object-cover object-center w-full h-45 max-w-full rounded-lg"
                src="/Lauren/8.jpeg" alt="gallery-photo" />
            </div>
            <div>
              <img className="object-cover object-center w-full h-45 max-w-full rounded-lg"
                src="/Lauren/9.jpeg"
                alt="gallery-photo" />
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-4 bg-tealGreen-100 mb-4 cursor-pointer"
      onClick={toggleEmilyDetails} 
      >
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
            Emily started learning to tattoo 7 years ago in Glasgow before taking time out to get a degree in Computer Arts, specialising in 3D environment art for video games. She&#39;s been been back tattooing for over a year now and mainly works in illustrative blackwork, but is happy to work with other styles. Emily loves to tattoo all things gothic, horror and spooky, but also anything video games or simpsons themed, or all of the above combined!
          </dd>
        </div>
      </dl>
      <div class="grid mt-3  grid-cols-1 gap-4 bg-tealGreen-100 sm:grid-cols-2 md:grid-cols-3">
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Emily/1.jpeg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Emily/2.jpeg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Emily/4.jpeg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Emily/5.jpeg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Emily/6.jpeg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Emily/7.jpeg" alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Emily/8.jpeg" alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Emily/9.jpeg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Emily/10.jpeg"
      alt="gallery-photo" />
  </div>
</div>
      </div>
      )}

      <div className="flex items-center gap-4 bg-tealGreen-100 mb-4 cursor-pointer"
      onClick={toggleStevenDetails}
       >
     
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
            Steven is a versatile and established artist with over a decade in the tattoo industry. With a previous history in fine art, Steven found his way into tattooing through portraiture and realism. Fueling his desire to learn, he&#39;s worked all over; from his home town of Dunfermline, to Glasgow, London and as far as California. Focusing on neo traditional, and with a background in realism and portraiture - Steven is equipped to take on any tattoo idea you might have
          </dd>
        </div>
      </dl>
      <div class="grid mt-3 grid-cols-1 gap-4 bg-tealGreen-100 sm:grid-cols-2 md:grid-cols-3">
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Steven/1.jpg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Steven/2.jpg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Steven/4.jpg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Steven/5.jpg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Steven/6.jpg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Steven/7.jpg" alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Steven/8.jpg" alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Steven/9.jpg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Steven/10.jpg"
      alt="gallery-photo" />
  </div>
</div>
      </div>
      )}

      <div className="flex items-center gap-4 bg-tealGreen-100  cursor-pointer"
      onClick={toggleIainDetails}
       >
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
          <dd className="text-gray-700 sm:col-span-2">@tattoosbyhank1981</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Bio</dt>
          <dd className="text-gray-700 sm:col-span-2">
            Iain began tattooing in 2005 and has since worked all over including, Denmark, Sweden, Spain, and the Cayman Islands. Due to this he is capable of covering all styles of work and designs. 
He prefers Japanese and dark horror work but anything else is happily taken on too.
          </dd>
        </div>
      </dl>
      <div class="grid mt-3 grid-cols-1 gap-4 bg-tealGreen-100 sm:grid-cols-2 md:grid-cols-3">
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Iain/1.jpg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Iain/2.jpg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Iain/3.jpg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Iain/4.jpg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Iain/5.jpg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Iain/6.jpg" 
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Iain/7.jpg" 
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover object-center w-full h-45 max-w-full rounded-lg"
      src="/Iain/8.jpg"
      alt="gallery-photo" />
  </div>
  <div>
    <img class="object-cover  object-center w-full h-45 max-w-full rounded-lg"
      src="/Iain/9.jpg"
      alt="gallery-photo" />
  </div>
</div>
      </div>
      )}
    </section>
  );
}

export default NewArtistInfo;
