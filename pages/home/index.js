import { Footer } from '~/components/Footer'
import About from './about'
import Discord from './discord'
import Hero from './hero'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Discord />
      <Footer />
    </>
  )
}
