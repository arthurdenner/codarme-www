import { Button } from '../../components/Button'
import SafeIcon from './safeicon.svg'

const Price = () => (
  <div className="bg-no-repeat lg:max-w-xl p-12 text-center"  style={{ backgroundSize: '100% 100%', backgroundImage: 'url(/img/bg-price.png)' }}>
      <div>
        <p className="text-white mb-6">Investimento</p>
        <p className="text-white text-2xl line-through text-gray mb-4">R$ 1997,00</p>
        <p className="text-white font-bold text-4xl"><span className="font-normal text-2xl">12x </span>R$ 97,14</p>
        <div className="mt-16  flex items-center justify-center mb-16">
          <div className="lg:w-3/4">
            <Button />
          </div>
        </div>
        <div className="w-full">
          <img src="/img/cards.png" />
        </div>
        <div className="w-full mt-12 mb-14">
          <div className="flex justify-center items-center">
          <SafeIcon />
          <div className="ml-4 text-white">
            <p className="font-bold">COMPRA</p>
            <p>100% Segura</p>
          </div>
          </div>
        </div>
      </div>
  </div>
)

export const Garantia = () => (
  <section className="mt-20">
    <div className="flex justify-center">
      <div className="rounded-full bg-darkGreen items-center justify-center flex flex-col text-white -mt-64" style={{ height: 280, width: 280}}>
        <div className="rounded-full bg-darkGreen border-2 border-dashed border-green items-center justify-center flex flex-col text-white" style={{ height: 240, width: 240}}>
            <p className="text-xl">Garantia</p>
            <p className="text-6xl font-bold">30</p>
            <p>Dias</p>
        </div>
        </div>
    </div>
    <div className="text-white text-center mb-16">
    <div className="flex items-center justify-center">
      <p className="text-white mt-16 mb-32 lg:w-2/3">Isso mesmo, <span className="font-bold">sem nenhuma condição</span>, se no primeiro mês você achar que o curso não é pra você, pode simplesmente <span className="font-bold">mandar um email</span> pedindo seu dinheiro de volta, <span className="font-bold">e nós te devolvemos</span>, simples assim!!</p>
    </div>
  
    <h2 className="text-2xl lg:text-4xl mb-16">Aprenda a desenvolver software de  <span className="text-green">verdade</span></h2>
    <div className="flex items-center justify-center">
    <p className="lg:w-2/3">
      O caminho para quem quer se tornar um desenvolvedor acima da média não é fácil e nem curto, leva tempo pra conseguir chegar lá, mas podemos te ajudar e encurtar muito esse caminho, vamos?
    </p>
    </div>
    </div>
    <div className="flex justify-center mt-24 mb-16">
      <Price />
   </div>
 </section>
  
)

