
import { Hero as HeroComponent} from '~/components/Hero'

const Presentation = () => (
  <div className="p-3 text-lightGray md:flex-1">
    <h1 className="p-1 text-3xl md:text-4xl lg:text-5xl">
      Desenvolvendo software de <span className="text-green">verdade</span>
    </h1>
    <p className="p-1 leading-loose xl:text-1xl">
      Seja avisado das próximas turmas do curso de Full Stack mais completo e
      com quem tem experiência.
    </p>
  </div>
)

const Hero = () => (
  <HeroComponent presentation={Presentation} sendPulseID={process.env.SENDPULSE_LIST_ID} />
)

export default Hero