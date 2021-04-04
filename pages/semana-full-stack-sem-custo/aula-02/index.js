import { Step } from '~/components/Step'
import { aulas } from '~/components/Step/aulas'
import { Header } from '~/components/Header'
import { YoutubeEmbed } from '~/components/YoutubeEmbed'
import Router from 'next/router'

const Aula02 = () => (
  <div
    className="bg-jungle flex flex-1 flex-col py-4 min-h-screen"
  >
    <div className="container">
      <Header />
      <div className="w-full mt-2 md:mt-6 p-4 md:p-0">
        <YoutubeEmbed embedId="aQghQHQOJQc" />
        <div className="flex mt-8 md:mt-12 flex-wrap justify-center md:justify-start">
          <Step isAvailable={['aula-01', 'aula-02']} />
        </div>
      </div>
    </div>
  </div>
)

Aula02.getInitialProps = ({ res }) => {
  if (aulas[1].available) {
    return {}
  }

  const lastAvailableClass = aulas.slice().reverse().find(({ available }) => available);
  const location = lastAvailableClass
    ? `/semana-full-stack-sem-custo/${lastAvailableClass?.slug}`
    : '/'

  if (res) {
    res.writeHead(302, {
      Location: location
    })

    res.end()
  }

  Router.push(location)
}


export default Aula02
