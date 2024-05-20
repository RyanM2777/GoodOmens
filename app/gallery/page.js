import React from 'react'
import Image from 'next/image'
import Navbar from '../_components/Navbar'
import Gallery from '../_components/Gallery'
import Footer from '../_components/Footer'

function page() {
  return (
    <>
    <Navbar />
    <Gallery />
    <Footer />
    </>
  )
}

export default page