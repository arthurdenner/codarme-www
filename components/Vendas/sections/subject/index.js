import IconStack1 from './iconstack1.svg'
import IconStack2 from './iconstack2.svg'
import IconStack3 from './iconstack3.svg'
import IconStack4 from './iconstack4.svg'

const CardSubject = ({ icon, text }) => (
  <div className="bg-navyGreen p-4 flex">
    <p className="text-green font-bold text-2xl">
      {React.createElement(icon)}
    </p>
    <div className="text-white mt-4">
      <p>
        {text}
      </p>
    </div>
  </div>
)

export const Subject = () => (
  <section className="mt-32">
    <h2 className="text-white text-4xl text-center mb-32">O que iremos <span className="text-green">desenvolver</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CardSubject icon={IconStack1}  text="Vamos desenvolver uma aplicação real, com uma necessidade real. Essa aplicação surgiu da necessidade de uma organização financeira mais personalizada, focada em planejamento e não em acompanhamento financeiro."/>
      <CardSubject icon={IconStack2} text="Esse projeto será desenvolvido do zero, passando pelo levantamento de requisitos, planejamento, MVP, design, front-end, Back-end, modelagem ER, mobile, e deploy." />
      <CardSubject icon={IconStack3} text="Ao longo do curso, vamos entendendo as necessidades, tomando decisões e corrigindo o caminho, pois é assim que funciona um projeto real."/>
      <CardSubject icon={IconStack4}  text="Você verá, além do desenvolvimento, o que realmente acontece durante o desenvolvimento, não somente tudo funcionando para que você copie e cole, mas como resolver os problemas que aparecem, os bugs e as tomadas de decisões técnicas e não técnicas"/>
    </div>
    
 </section>
)