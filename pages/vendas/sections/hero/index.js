import { Button } from '../../components/Button'
import { SocialLinks } from '~/components/SocialLinks'

export const Hero = () => (
  <section className="flex md:flex-row flex-col mt-16">
    <div className="w-xl">
      <h1 className="text-white text-3xl md:text-5xl mt-0 md:mt-8 text-center md:text-left">Desenvolvendo software de <span className="text-green">verdade</span></h1>
      <p className="text-white mt-8 text-md md:text-xl">Seja avisado das próximas turmas do curso de Full Stack mais completo e com quem tem experiência.</p>
      
      <div className="mt-12 flex justify-center hidden md:block">
        <div className="w-9/12 md:w-8/12">
          <Button>
            Garantir minha vaga
          </Button>
        </div>
      </div>

    </div>
    <div className="w-full flex flex-col items-end">
      <img className="mt-6 md:mt-0" src="/img/video.png" />
      <img className="hidden md:block" src="/img/element-header.png" />
    </div>
    <div className="mt-12 flex justify-center block md:hidden">
        <div className="w-10/12 md:w-8/12">
          <Button>
            Garantir minha vaga
          </Button>
        </div>
    </div>
   
    <div className="flex w-full justify-center mt-12 md:hidden">
      <SocialLinks color="white"/>
    </div>
    <div className="flex w-full justify-end mt-12 md:hidden">
    <img className="block md:hidden" src="/img/element-header.png" />
    </div>
  </section>
)