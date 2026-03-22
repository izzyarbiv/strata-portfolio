import { NewHero } from '@/components/sections/NewHero'
import { PlatformsPreview } from '@/components/sections/PlatformsPreview'
import { AIDemo } from '@/components/sections/AIDemo'
import { TechStackPreview } from '@/components/sections/TechStackPreview'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <NewHero />
      <PlatformsPreview />
      <AIDemo />
      <TechStackPreview />
      <Footer />
    </>
  )
}
