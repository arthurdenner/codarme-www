
import { Step } from '~/components/Step'
import { Header } from '~/components/Header'

const Aula05 = () => (
  <div
  className="bg-jungle flex flex-1 flex-col py-4"
  >
    <div className="container">
      <Header />
      <div className="w-full mt-8 md:mt-24 p-4 md:p-0">
      <iframe style={{borderRadius: 14}} width="100%" height="600px" src="https://www.youtube.com/embed/YGVhVnw4nJY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
        <div className="flex mt-8 md:mt-24 flex-wrap justify-center md:justify-start">
          <Step date="05/04" text="Aula 01"/>
          <Step date="06/04" text="Aula 02" />
          <Step date="07/04" text="Aula 03" />
          <Step date="08/04" text="Aula 04" />
          <Step date="09/04" text="Aula 05" />
        </div>
      </div>
    </div>
  </div>
)

Aula05.getInitialProps = ({ res }) => {
  if(!process.env.AULA_05) {
    if (res) { 
      res.writeHead(302, {
      Location: '/semana-full-stack-sem-custo'
    })
    res.end()
    } else {      
      Router.push('/semana-full-stack-sem-custo')
    }
  }
  return {}
}


export default Aula05

