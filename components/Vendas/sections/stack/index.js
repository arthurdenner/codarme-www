import { Subtitle } from '../../components/Subtitle'

import JsIcon from './js.svg'
import NodeIcon from './node.svg'
import ReactIcon from './react.svg'
import JestIcon from './jest.svg'
import DockerIcon from './docker.svg'

const CardStack = ({ icon, text, title }) => (
  <div className="flex">
  <div>
    {React.createElement(icon)}
  </div>
  <div className="ml-8">
    <p className="text-white text-2xl">{title}</p>
    <p className="text-lighterGray mt-4">
    {text}
    </p>
  </div>
  </div>
)

export const Stack = () => (
  <section className="mt-20">
    <Subtitle>Como iremos <span className="text-green">construir</span> tudo isso?</Subtitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      <CardStack number="01" title="Javascript" icon={JsIcon} text="A linguagem usada no desenvolvimento do projeto do curso! Escolhemos essa linguagem por ser versátil e estar em alta no mercado."/>
      <CardStack number="02" title="NodeJS" icon={NodeIcon} text="Como vamos utilizar JS, Node é nossa opção de backend."/>
      <CardStack number="03" title="React e React Native" icon={ReactIcon} text="Uma das bibliotecas mais famosas e utilizadas para criar sistemas de todos tipos e tamanhos"/>
      <CardStack number="04" title="Docker" icon={DockerIcon} text="Docker se tornou praticamente unânime no mundo do desenvolvimento, e não poderíamos criar uma aplicação real sem ele, não é mesmo?" />
      <CardStack number="04" title="Jest e React Testing Library" icon={JestIcon} text="Aplicação real sem testes automatizados não existe! Então, utilizaremos muito Jest e RTL para deixar nossa aplicação livre de bugs (ou quase! hehe)" />
    </div>
 </section>
)