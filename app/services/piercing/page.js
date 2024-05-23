import React from 'react'
import Navbar from '../../_components/Navbar'

import Footer from '../../_components/Footer'
import PiercingSection from '@/app/_components/PiercingSection'
import FaqPiercing from '@/app/_components/FaqPiercing'

function page() {
  return (
    <>
    <Navbar />
    <PiercingSection />
    <FaqPiercing />
    <Footer />
    </>
  )
}

export default page