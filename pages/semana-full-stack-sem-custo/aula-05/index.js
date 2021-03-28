
import { Step } from '~/components/Step'
import { Header } from '~/components/Header'
import { YoutubeEmbed } from '~/components/YoutubeEmbed'

const Aula05 = () => (
  <div
  className="bg-jungle flex flex-1 flex-col py-4"
  >
    <div className="container">
      <Header />
      <div className="w-full mt-8 md:mt-24 p-4 md:p-0">
      <YoutubeEmbed embedId="YGVhVnw4nJY" />
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

