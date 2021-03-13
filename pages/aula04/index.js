
import { Step } from '~/components/Step'
import { Header } from '~/components/Header'

const Aula01 = () => (
  <div
    className="bg-jungle flex flex-1 flex-col py-4"
  >
    <div className="container">
      <Header />
      <div className="w-full mt-10">
        <iframe style={{borderRadius: 14}} width="100%" height="600px" src="https://www.youtube.com/embed/os8bbY1XZOo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="flex mt-10 flex-wrap justify-center md:justify-start">
          <Step date="29/03" text="Aula 01"/>
          <Step date="30/03" text="Aula 02" />
          <Step date="31/03" text="Aula 03" />
          <Step date="01/04" text="Aula 04" />
          <Step date="02/04" text="Aula 05" disable/>
        </div>
      </div>
    </div>
  </div>
)

export default Aula01
