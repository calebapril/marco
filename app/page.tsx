import AboutUs from "@/components/AboutUs"
import FeaturedSection from "@/components/FeaturedSection"
import FeaturedSection2 from "@/components/FeaturedSection2"
import Hero from "@/components/Hero"
import Timeline from "@/components/Timeline"

const HomePage = () => {
  return (
    <div className=''>
      <Hero/>
      <AboutUs/>
      <FeaturedSection/>
      <Timeline/>
      <FeaturedSection2/>
    </div>
  )
}

export default HomePage