import React from 'react'
import Navbar from '../../_components/Navbar'
import TattooSection from '@/app/_components/TattooSection'
import Footer from '../../_components/Footer'
import FaqTattoo from '@/app/_components/FaqTattoo'

function page() {
  return (
    <>
    <Navbar />
    <TattooSection />
    <FaqTattoo />
    <Footer />
    </>
  )
}

export default page