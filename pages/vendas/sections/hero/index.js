import { Button } from '../../components/Button'

export const Hero = () => (
  <section className="flex mt-16">
    <div className="w-xl">
      <h1 className="text-white text-5xl">Desenvolvendo software de <span className="text-green">verdade</span></h1>
      <p className="text-white mt-8 text-xl">Seja avisado das próximas turmas do curso de Full Stack mais completo e com quem tem experiência.</p>
      <div className="mt-12 flex justify-center">
        <div  className="w-8/12">
          <Button>
            Garantir minha vaga
          </Button>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-col items-end">
      <img src="/img/video.png" />
      <img src="/img/element-header.png" />
    </div>
  </section>
)