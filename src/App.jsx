import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Section1 from './assets/components/section1/section1'
import Section2 from './assets/components/section2/section2'
import Section3 from './assets/components/section3/section3'
import Section4 from './assets/components/section4/section4'
import Section7 from './assets/components/section7/section7'
import Section9 from './assets/components/section9/section9'
import WhyUs from './assets/components/why us/why_us'
import FAQ from './assets/components/FAQ/faq'
import Footer from './assets/components/footer/footer'
import Pricing from './assets/components/pricing/pricing'
import LegalNotice from './LegalNotice'
import TermsOfService from './TermsOfService'

function HomePage() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section7 />
      <WhyUs />
      <Section4 />
      {/* <Section5 /> */}
      {/* <Section6 /> */}
      {/* <Section10 /> */}
      {/* <Section8 /> */}
      <Section9 />
      <Pricing />
      {/* <Integration /> */}
      <FAQ />
      <Footer />
    </>
  )
}

function PrivacyPage() {
  return (
    <>
      <LegalNotice />
      <Footer />
    </>
  )
}

function TermsPage() {
  return (
    <>
      <TermsOfService />
      <Footer />
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/legal-notice" element={<PrivacyPage />} />
      <Route path="/terms-of-service" element={<TermsPage />} />
    </Routes>
  )
}

export default App
