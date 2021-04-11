import { Footer } from '~/components/Footer'
import { Modal } from '~/components/Modal'
import About from './about'
import Discord from './discord'
import Hero from './hero'


export default function Home() {
  return (
    <>
    <Modal />
      <Hero />
      <About />
      <Discord />
      <Footer />
    </>
  )
}
