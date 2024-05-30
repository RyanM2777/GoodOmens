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

    <title>{metadata.title}</title>
      <meta name="title" content={metadata.title} />
      <meta name="description" content={metadata.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://goodomens.co.uk/events" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content="/GoodOmensCircle.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://goodomens.co.uk/events" />
      <meta property="twitter:title" content={metadata.title} />
      <meta property="twitter:description" content={metadata.description} />
      <meta property="twitter:image" content="/GoodOmensCircle.png" />
{/* Favicon */}
      <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon" />
 <link rel="icon" href="/GoodOmensCircle.png" type="image/x-icon" />

      {/* Canonical Tag */}
      <link rel="canonical" href="https://www.goodomens.co.uk/gallery" />
    </>
  )
}

export default page