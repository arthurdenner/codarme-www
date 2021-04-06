import { Header } from '~/components/Vendas/components/Header'
import { Logo } from '~/components/Logo'
import { AboutBruno, Bonus, Hero, Stack, Reviews, Subject, Topics, Garantia, Faq,  } from '~/components/Vendas/sections'


const Vendas = () => {
  return (
    <>
    <div
      className="bg-no-repeat flex flex-1 flex-col h-full bg-darkGreen"
      style={{ backgroundImage: 'url(/img/bg-sales.png)' }}
    >
      <div className="container p-4">
        <Header />
        <Hero />
        <Subject />
        <Topics />
      </div>
     
    </div>
    <div
      className="flex flex-1 flex-col h-full bg-darkGreen"
    >
      <div className="container p-4">
        <Stack />
        <AboutBruno />
        <Reviews />
        <Bonus />
      </div>
    </div>
    <div
      className="bg-cover flex flex-1 flex-col h-full"
      style={{backgroundColor: '#141F23'}}
    >
      <div className="container p-4">
        <Garantia />
      </div>
    </div>
    <div
      className="flex flex-1 flex-col h-full bg-darkGreen"
    >
      <div className="container p-4">
        <Faq />
      </div>
    </div>
    <footer className="flex items-center justify-center w-full bg-darkGreen">
      <div className="p-4">
        <Logo color="white" width={200}/>
      </div>
    </footer>
    </>
  )
}

export default Vendas