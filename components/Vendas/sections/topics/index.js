import {Subtitle} from '../../components/Subtitle'

const Card = ({ number, text }) => (
  <div className="bg-green bg-opacity-25  p-8">
    <p className="text-green font-bold text-2xl">
    {number}
    </p>
    <p className="text-white mt-4">
      {text}
    </p>
  </div>
)

export const Topics = () => (
  <section className="mt-20">
    <Subtitle>Por que escolher a <span className="text-green">Codar.me</span></Subtitle>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-16 lg:p-0">
      <Card number="01" text="Um curso totalmente focado na prática, desenvolvendo uma aplicação real, nada de copia e cola, nem de clone de serviços existentes." />
      <Card number="02" text="Muito mais que um curso sobre software. É uma experiência da rotina e dia a dia real de um desenvolvedor, aprendendo a tomar decisões em cada parte do processo." />
      <Card number="03" text="Desenvolvimento de produto: Vamos entender e aprender o que é uma entrega de valor, e como desenvolver algo que seja útil."/>
      <Card number="04"  text="Usaremos as tecnologias de alta demanda no mercado, passando por todas as etapas do processo de desenvolvimento: front, Back, mobile, devops."/>
      <Card number="05"  text="Tudo isso, sempre pensando em padrões de projeto e qualidade de software acima de tudo."/>
      <Card number="06"  text="Suporte para que você possa tirar todas as suas dúvidas, e garantir que estará aprendendo de verdade."/>
    </div>
    
 </section>
   
)