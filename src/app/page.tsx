import { Hero } from '@/components/sections/Hero'
import { Portfolio } from '@/components/sections/Portfolio'
import { Services } from '@/components/sections/Services'
import { TechStack } from '@/components/sections/TechStack'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
