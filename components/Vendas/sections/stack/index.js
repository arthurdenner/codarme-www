import JsIcon from './js.svg'
import NodeIcon from './node.svg'
import ReactIcon from './react.svg'
import JestIcon from './jest.svg'

const CardStack = ({ icon, text, title }) => (
  <div>
  <div className="bg-black bg-opacity-25 p-16 flex items-center justify-center">  
    {React.createElement(icon)}
  </div>
  <p className="text-white text-2xl mt-8">{title}</p>
  <p className="text-lighterGray mt-8">
   {text}
  </p>
  </div>
)

export const Stack = () => (
  <section className="mt-32">
    <h2 className="text-white text-4xl text-center mb-32">Como iremos <span className="text-green">construir</span> tudo isso?</h2>
    <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
      <CardStack number="01" title="Javascript" icon={JsIcon} text="A linguagem usada no desenvolvimento do projeto do curso! Escolhemos essa linguagem por ser versátil e estar em alta no mercado."/>
      <CardStack number="02" title="NodeJS" icon={NodeIcon} text="Como vamos utilizar JS, Node é nossa opção de backend."/>
      <CardStack number="03" title="React e React Native" icon={ReactIcon} text="Uma das bibliotecas mais famosas e utilizadas para criar sistemas de todos tipos e tamanhos"/>
      <CardStack number="04" title="Jest e React Testing Library" icon={JestIcon} text="Aplicação real sem testes automatizados não existe! Então, utilizaremos muito Jest e RTL para deixar nossa aplicação livre de bugs (ou quase! hehe)" />
    </div>
 </section>
)