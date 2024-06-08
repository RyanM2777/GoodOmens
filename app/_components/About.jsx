import React from 'react'

function About() {
  return (
    <section className="bg-tealGreen-200 text-black">
    <div className="mx-auto  px-4 max-w-screen-xl py-32 lg:flex  lg:items-center">
    <div className="mx-auto mx-15 lg:mx-46 sm:mx-1 text-center">
        <h1
          className="text-black text-3xl font-extrabold sm:text-5xl"
        >
          About Us <br />
  
          <span className="sm:block">  </span>
        </h1>

  
         <p className="mx-auto mt-4 text-center  sm:text-xl/relaxed text-black font-bold">
         Based in the heart of Dundee City Centre, we pride ourself on being a welcoming and inclusive environment. With nearly 40 years of Tattoo and Piercing experience between us, we can help you get the tattoo or piercing you desire.
<br />
<br />
         From small pieces to larger projects, we cover a variety of tattoo styles and themes, with each artist having their own particular favoured style. Please check out the Artists page and look at their work to help you find the artist that is right for you.
         <div className="mt-2 flex items-center justify-center gap-x-6">
           <a
                href="/artists"
                className="rounded-md bg-tealGreen-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-tealGreen-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Check out our artists <span aria-hidden="true">→</span>
              </a>
              
              
            </div>
        </p>

        
      </div>
    </div>
  </section>
  )
}

export default About
