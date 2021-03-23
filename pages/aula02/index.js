
import { Step } from '~/components/Step'
import { Header } from '~/components/Header'

const Aula02 = () => (
  <div
  className="bg-jungle flex flex-1 flex-col py-4"
  >
  <div className="container">
    <Header />
    <div className="w-full mt-8 md:mt-24 p-4 md:p-0">
      <iframe style={{borderRadius: 14}} width="100%" height="600px" src="https://www.youtube.com/embed/os8bbY1XZOo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="flex mt-8 md:mt-24 flex-wrap justify-center md:justify-start">
        <Step date="29/03" text="Aula 01" />
        <Step date="30/03" text="Aula 02" />
        <Step date="31/03" text="Aula 03" disable/>
        <Step date="01/04" text="Aula 04" disable />
        <Step date="02/04" text="Aula 05" disable/>
      </div>
    </div>
  </div>
</div>
)

Aula02.getInitialProps = ({ res }) => {
  if(!process.env.AULA_02) {
    if (res) { 
      res.writeHead(302, {
      Location: '/'
    })
    res.end()
    } else {      
      Router.push('/')
    }
  }
  return {}
}


export default Aula02
