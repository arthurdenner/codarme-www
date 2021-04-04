import { aulas } from '~/components/Step/aulas'

const Week = () => (
  <></>
)

Week.getInitialProps = ({ res }) => {
  const lastAvailableClass = aulas.slice().reverse().find(({ available }) => available)

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


export default Week

