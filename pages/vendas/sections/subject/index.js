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
      <p className="text-2xl">Lorem Ipsum</p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ipsum sed nunc finibus faucibus id imperdiet eros.
      </p>
    </div>
  </div>
)

export const Subject = () => (
  <section className="mt-20">
    <h2 className="text-white text-4xl text-center mb-16">Tópicos <span className="text-green">principais</span></h2>
    <div className="grid grid-cols-2 gap-6">
      <CardSubject number="01" icon={IconStack1}/>
      <CardSubject number="02" icon={IconStack2}/>
      <CardSubject number="03" icon={IconStack3}/>
      <CardSubject number="04" icon={IconStack4}/>
    </div>
    
 </section>
)