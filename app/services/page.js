import React from 'react'
import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'
import ServicesFAQ from '../_components/ServicesFAQ'
import Pricelist from '../_components/Pricelist'

function page() {
  return (
    <>
    <Navbar />
    <Pricelist />
    <ServicesFAQ />
    <Footer />
    </>
  )
}

export default page