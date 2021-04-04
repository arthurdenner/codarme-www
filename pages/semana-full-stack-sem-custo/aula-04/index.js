import { Step } from '~/components/Step'
import { aulas } from '~/components/Step/aulas'
import { Header } from '~/components/Header'
import { YoutubeEmbed } from '~/components/YoutubeEmbed'
import Router from 'next/router'

const Aula04 = () => (
  <div
    className="bg-jungle flex flex-1 flex-col py-4 min-h-screen"
  >
    <div className="container">
      <Header />
      <div className="w-full mt-2 md:mt-6 p-4 md:p-0">
        <YoutubeEmbed embedId="zJnue3LDWbY" />
        <div className="flex mt-8 md:mt-12 flex-wrap justify-center md:justify-start">
          <Step isAvailable={['aula-01', 'aula-02', 'aula-03', 'aula-04']} />
        </div>
      </div>
    </div>
  </div>
)

Aula04.getInitialProps = ({ res }) => {
  if (aulas[3].available) {
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

export default Aula04
