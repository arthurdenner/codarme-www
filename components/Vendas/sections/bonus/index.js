import {Subtitle} from '../../components/Subtitle'

import IconBonus1 from './bonusicon1.svg'
import IconBonus2 from './bonusicon2.svg'
import IconBonus3 from './bonusicon3.svg'
import IconBonus4 from './bonusicon4.svg'


const CardBonus = ({ icon, text, title }) => (
  <div className="flex mb-8 items-center">
    <div>
      {React.createElement(icon)}
      </div>
      <div className="ml-8">
        <p className="text-white text-2xl">{title}</p>
        <p className="text-white mt-4">
          {text}
        </p>
      </div>
  </div>
)

export const Bonus = () => (
  <section className="mt-20">
    <Subtitle>Bônus <span className="text-green">exclusivos</span> para esta turma</Subtitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-48">
      <CardBonus number="01" icon={IconBonus1} title="Curso Javascript" text="Você vai ganhar o minicurso de Javascript puro. Esse minicurso fala dos fundamentos do Javascript, e explica a base necessária, passando por diversas funcionalidades nativas, para que você entenda de verdade o que está rolando com a sua aplicação"/>
      <CardBonus number="02" icon={IconBonus2} title="Curso NodeJS" text="Novamente, vamos falar de fundamentos e de como as coisas funcionam. Aqui, você vai aprender a criar um servidor Node sem nenhum tipo de framework!"/>
      <CardBonus number="03" icon={IconBonus3} title="React e React Native" text="Além dos minicursos de JavaScript e Node, você vai ganhar também outros 2 minicursos: React e React Native, com muito conhecimento de base, necessário para entender de fato como as coisas funcionam. Pare de decorar código e entenda o que está acontecendo debaixo dos panos."/>
      <CardBonus number="04" icon={IconBonus4} title="Turma exclusiva" text="Você terá também um canal exclusivo no Discord, só com os alunos da turma, onde poderá trocar ideias, ajudar e ser ajudado por outros alunos e pela equipe da Codar.me."/>
    </div>
 </section>
   
)