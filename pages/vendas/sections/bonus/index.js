import IconBonus1 from './bonusicon1.svg'
import IconBonus2 from './bonusicon2.svg'
import IconBonus3 from './bonusicon3.svg'
import IconBonus4 from './bonusicon4.svg'
import IconBonus5 from './bonusicon5.svg'
import IconBonus6 from './bonusicon6.svg'

const CardBonus = ({ icon, text }) => (
  <div className="flex mb-8 items-center">
    <div>
      {React.createElement(icon)}
      </div>
      <div className="ml-8">
        <p className="text-white text-2xl">Lorem Ipsum</p>
        <p className="text-white mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ipsum sed nunc finibus faucibus id imperdiet eros.
        </p>
      </div>
  </div>
)

export const Bonus = () => (
  <section className="mt-20">
    <h2 className="text-white text-4xl text-center mb-16">Bônus <span className="text-green">exclusivo</span> para esta turma</h2>
    <div className="grid grid-cols-2 gap-12">
      <CardBonus number="01" icon={IconBonus1} />
      <CardBonus number="02" icon={IconBonus2}/>
      <CardBonus number="03" icon={IconBonus3}/>
      <CardBonus number="04" icon={IconBonus4}/>
      <CardBonus number="01" icon={IconBonus5}/>
      <CardBonus number="02" icon={IconBonus6}/>
    </div>
 </section>
   
)