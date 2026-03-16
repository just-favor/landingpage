import React from 'react'
import Header from '@/components/Navigation/Header'
import Hero from '@/components/Landing/Hero'
import StickyStack from '@/components/Landing/Stickystack'
import AIfeats from '@/components/Landing/ AIfeats'
import Casestudy from '@/components/Landing/Casestudy'
import Testimonial from '@/components/Landing/Testimonial'
import Faq from '@/components/Landing/Faq'
import Tether from '@/components/Landing/Tether'
import Footer from '@/components/Navigation/Footer'

function page() {
  return (
    <div id="top">
      <Header />
      <main className="pt-50 md:pt-50">
        <section id="overview"><Hero /></section>
        <section id="features"><StickyStack /><AIfeats/></section>
        <section id="results"><Casestudy /><Testimonial /></section>
        <Faq />
        <Tether />
      </main>
      <Footer />
    </div>
  )
}

export default page
