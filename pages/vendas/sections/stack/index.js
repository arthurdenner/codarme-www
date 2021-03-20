import JsIcon from './js.svg'
import NodeIcon from './node.svg'
import ReactIcon from './react.svg'
import JestIcon from './jest.svg'

const CardStack = ({ icon, text }) => (
  <div>
  <div className="bg-black bg-opacity-25 p-16 flex items-center justify-center">  
    {React.createElement(icon)}
  </div>
  <p className="text-white text-2xl mt-8">Lorem Ipsum</p>
  <p className="text-lighterGray mt-8">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ipsum sed nunc finibus faucibus id imperdiet eros.
  </p>
  </div>
)

export const Stack = () => (
  <section className="mt-20">
    <h2 className="text-white text-4xl text-center mb-16">Como iremos <span className="text-green">construir</span> tudo isso?</h2>
    <div className="grid grid-cols-4 gap-6">
      <CardStack number="01" icon={JsIcon}/>
      <CardStack number="02" icon={NodeIcon}/>
      <CardStack number="03" icon={ReactIcon}/>
      <CardStack number="04" icon={JestIcon}/>
    </div>
    
 </section>
   
)