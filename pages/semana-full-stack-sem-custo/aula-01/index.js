

import { Step } from '~/components/Step'
import { Header } from '~/components/Header'
import { YoutubeEmbed } from '~/components/YoutubeEmbed'
import Router from 'next/router'



const Aula01 = () => {

  
  return(
  <div
  className="bg-jungle flex flex-1 flex-col py-4 min-h-screen"
  >
  <div className="container">
    <Header />
    <div className="w-full mt-8 md:mt-12 p-4 md:p-0">
      <YoutubeEmbed embedId="wYg5pfpnVhI" />
      <div className="flex mt-8 md:mt-12 flex-wrap justify-start">
        <Step isAvailable={['aula-01']}/>
      </div>
    </div>
  </div>
</div>
)}

Aula01.getInitialProps = ({ res }) => {
  if(!process.env.NEXT_PUBLIC_AULA_01) {
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
