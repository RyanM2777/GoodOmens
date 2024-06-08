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
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5x text-white">
        Welcome to
        <strong className="font-extrabold text-white sm:block"> Good Omens Tattoo and Piercing </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
        
      </p>

      
    </div>
  </div>
</section>


  )
}

export default NewHeader
