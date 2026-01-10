import { useState } from 'react'
import './App.css'
import Section1 from './assets/components/section1/section1'
import Section2 from './assets/components/section2/section2'
import Section3 from './assets/components/section3/section3'
import Section4 from './assets/components/section4/section4'
import Section5 from './assets/components/section5/section5'
import Section6 from './assets/components/section6/section6'
import Section7 from './assets/components/section7/section7'
import Section8 from './assets/components/section8/section8'
import Section9 from './assets/components/section9/section9'
import Section10 from './assets/components/section10/section10'
import WhyUs from './assets/components/why us/why_us'
import Integration from './assets/components/integration/integration'
import FAQ from './assets/components/FAQ/faq'
import Footer from './assets/components/footer/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section7 />
      <WhyUs />
      <Section4 />
      <Section5 />
      {/* <Section6 /> */}
      {/* <Section10 /> */}
      {/* <Section8 /> */}
      <Section9 />
      <Integration />
      <FAQ />
      <Footer />
      
    </>
  )
}

export default App
