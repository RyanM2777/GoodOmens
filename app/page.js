import Image from "next/image";
import Navbar from "./_components/Navbar";
import HomeHeader from "./_components/HomeHeader"
import Team from "./_components/Team"
import Testimonials from "./_components/Testimonials"
import Footer from './_components/Footer'


export default function Home() {
  return (
    <>
    <HomeHeader />
    <Team />
    <Testimonials />
    <Footer />
    </>
  );
}
