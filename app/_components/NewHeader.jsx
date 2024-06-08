import React from 'react'

function NewHeader() {
  return (
   <section
  className="text-black"
  style={{
    backgroundImage: "url('/goodomens.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
        Welcome to
        <strong className="font-extrabold text-white sm:block"> Good Omens Tattoo and Piercing </strong>
      </h1>
    </div>
  </div>
  <div className="mx-auto max-w-screen-xl px-4 py-8 lg:flex lg:items-center lg:justify-center">
    <p className="sm:text-xl/relaxed text-center bg-white bg-opacity-30 p-4 rounded">
      Welcome to Good Omens, Dundee&#39;s Premier Tattoo & Piercing Studio!
      Our talented artists and piercers are dedicated to transforming your visions into stunning works of art. 
      Whether you&#39;re seeking a bold new tattoo, a delicate piece of body art, or a stylish piercing, we are here 
      to provide exceptional quality and unparalleled creativity.
    </p>
  </div>
</section>


  )
}

export default NewHeader
