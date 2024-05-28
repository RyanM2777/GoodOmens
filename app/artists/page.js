import React from 'react'
import Navbar from '../_components/Navbar'
import Team from '../_components/Team'
import TeamInfo from '../_components/TeamInfo'
import Footer from '../_components/Footer'
import NewArtistInfo from '../_components/NewArtistInfo'

function page() {
  return (
    <>
    <Navbar />
    <Team />
    <NewArtistInfo />
    <Footer/>
    </>
  )
}

export default page