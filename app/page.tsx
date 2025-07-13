import About from "@/sections/About";
import Faq from "@/sections/Faq";
import Feature from "@/sections/Feature";
import FooterSection from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";

export default function Home() {
  return (
    <div className="w-full bg-black">
        <Navbar />
        <Hero />
        <About />
        <Feature />
        <Faq />
        <FooterSection />
    </div>
  )
}
