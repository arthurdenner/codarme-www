import {Subtitle} from '../../components/Subtitle'

export const Subject = () => (
  <section className="mt-32 text-white">
    <Subtitle>O que iremos <span className="text-green">desenvolver</span></Subtitle>
    <div className="flex flex-col-reverse md:flex-row items-center text-lg">
      <div>
        <p className="mb-8">
          Vamos desenvolver uma aplicação real, com uma necessidade real. Essa aplicação surgiu da necessidade de uma organização financeira mais personalizada, focada em planejamento e não em acompanhamento financeiro.
        </p>
        <p className="mb-8">
          Esse projeto será desenvolvido do zero, passando pelo levantamento de requisitos, planejamento, MVP, design, front-end, Back-end, modelagem ER, mobile, e deploy.
        </p>
        <p className="mb-8">
          Ao longo do curso, vamos entendendo as necessidades, tomando decisões e corrigindo o caminho, pois é assim que funciona um projeto real.
        </p>
        <p>
          Você verá, além do desenvolvimento, o que realmente acontece durante o desenvolvimento, não somente tudo funcionando para que você copie e cole, mas como resolver os problemas que aparecem, os bugs e as tomadas de decisões técnicas e não técnicas.
        </p>
      </div>
      <div className="w-full">
        <img src="/img/app-preview.png" />
      </div>
    </div>
    
 </section>
)