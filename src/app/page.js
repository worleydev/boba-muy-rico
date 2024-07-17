import SectionHeaders from '@/components/layout/SectionHeaders'
import Hero from '../components/layout/Hero'
import HomeMenu from "../components/layout/HomeMenu"
import About from "@/components/layout/About"

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders 
          subHeader={'Our Story'}
          mainHeader={'About us'}
        />
      </section>
      <About />
      {/* <section className="text-center my-8" id="contact">
        <SectionHeaders 
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
      </section> */}
    </>
  )
}
