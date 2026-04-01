import SectionHeaders from '@/components/layout/SectionHeaders'
import Hero from '../components/layout/Hero'
import HomeMenu from "../components/layout/HomeMenu"
import About from "@/components/layout/About"
import LocationHours from "@/components/layout/LocationHours"
import Faq from "@/components/layout/Faq"

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders 
          subHeader={'Our Story'}
          mainHeader={'About Us'}
        />
      </section>
      <About />
      <Faq />
      <LocationHours />
      {/* <section className="text-center my-8" id="contact">
        <SectionHeaders 
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
      </section> */}
    </>
  )
}
