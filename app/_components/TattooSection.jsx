import React from 'react'

function TattooSection() {
  return (
    <section className="bg-tealGreen-100 text-black">
    <div className="mx-auto  px-4 max-w-screen-xl py-32 lg:flex  lg:items-center">
    <div className="mx-auto mx-15 lg:mx-46 sm:mx-1 text-center">
        <h1
          className="bg-gradient-to-r from-tealGreen-500 to-tealGreen-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
          Tattoos <br />
  
          <span className="sm:block">  </span>
        </h1>

  
         <p className="mx-auto mt-4 text-center  sm:text-xl/relaxed text-black font-bold">
         All tattoos are 18+, please remember to bring Photo ID to your appointment. If you are redeeming a voucher, please make us aware at the time of booking. In some rare cases, medical notes may be necessary, please make us aware of any medical conditions that may cause issues at the time of booking.
<br />
<br />
         
         
        </p>

        
      </div>
    </div>
  </section>
  )
}

export default TattooSection