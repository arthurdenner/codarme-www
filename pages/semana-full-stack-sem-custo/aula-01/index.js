
import { Step } from '~/components/Step'
import { Header } from '~/components/Header'
import { YoutubeEmbed } from '~/components/YoutubeEmbed'
import Router from 'next/router'


const Aula01 = () => (
  <div
  className="bg-jungle flex flex-1 flex-col py-4 min-h-screen"
  >
  <div className="container">
    <Header />
    <div className="w-full mt-8 md:mt-24 p-4 md:p-0">
      <YoutubeEmbed embedId="wYg5pfpnVhI" />
      <div className="flex mt-8 md:mt-24 flex-wrap justify-center md:justify-start">
        <Step date="05/04" text="Aula 01" />
        <Step date="06/04" text="Aula 02" disable/>
        <Step date="07/04" text="Aula 03" disable/>
        <Step date="08/04" text="Aula 04" disable />
        <Step date="09/04" text="Aula 05" disable/>
      </div>
    </div>
  </div>
</div>
)

Aula01.getInitialProps = ({ res }) => {
  if(!process.env.AULA_01) {
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

export default Aula01
