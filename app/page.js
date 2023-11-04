'use client'
import TestimonialCarousel from "./components/carousel/Testimonial/TestimonialCarousel";
import Footer from "./components/footer/Footer";
import Herro from "./components/herro/Herro";
import Navbar from "./components/navbar/Navbar";
import Network from "./components/network/Network";
import PricingPage from "./components/pricing/PricingPage";
import Store from "./components/store/Store";
export default function Home() {
  
 
  return (
    <main>
      <Navbar />
      <Herro />
      <Network />
      <Store/>
      <PricingPage />
      {/* <Testimonials/> */}
      <TestimonialCarousel />
      <Footer/>
    </main>
  );
}
