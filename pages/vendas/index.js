import { Header } from './components/Header'
import { AboutBruno, Bonus, Hero, Stack, Reviews, Subject, Topics} from './sections'


const Webinario = () => {
  return (
    <>
    <div
      className="bg-cover flex flex-1 flex-col h-full bg-darkGreen"
      style={{ backgroundImage: 'url(/img/bg-sales.png)' }}
    >
      <div className="container">
        <Header />
        <Hero />
        <Topics />
        <Subject />
      </div>
     
    </div>
    <div
      className="bg-cover flex flex-1 flex-col h-full bg-darkGreen"
      style={{ backgroundImage: 'url(/img/bg-sales2.png)' }}
    >
      <div className="container">
        <Stack />
        <AboutBruno />
        <Reviews />
        <Bonus />
      </div>
    </div>
    </>
  )
}

export default Webinario