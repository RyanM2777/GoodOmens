import React from 'react'
import Navbar from '../_components/Navbar'
import Team from '../_components/Team'
import TeamInfo from '../_components/TeamInfo'
import Footer from '../_components/Footer'
import NewArtistInfo from '../_components/NewArtistInfo'
import NewTeam from '../_components/NewTeam'

export const metadata = {
  title: 'Good Omens - Tattoo & Piercing | Artists',
  description: 'Vibrant and friendly Tattoo studio located in Dundee city centre!',
}

function page() {
  return (
    <>
    <Navbar />
    <NewTeam />
    <Footer/>

    <title>{metadata.title}</title>
      <meta name="title" content={metadata.title} />
      <meta name="description" content={metadata.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://goodomens.co.uk/artists" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content="/GoodOmensCircle.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://goodomens.co.uk/artists" />
      <meta property="twitter:title" content={metadata.title} />
      <meta property="twitter:description" content={metadata.description} />
      <meta property="twitter:image" content="/GoodOmensCircle.png" />
{/* Favicon */}
      <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon" />
 <link rel="icon" href="/GoodOmensCircle.png" type="image/x-icon" />

      {/* Canonical Tag */}
      <link rel="canonical" href="https://www.goodomens.co.uk/artists" />
    </>
  )
}

export default page