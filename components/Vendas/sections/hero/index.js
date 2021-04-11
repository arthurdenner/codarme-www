import { Button } from '../../components/Button'
import { SocialLinks } from '~/components/SocialLinks'
import { YoutubeEmbed } from '~/components/YoutubeEmbed'

export const Hero = () => (
  <section className="flex lg:flex-row flex-col mt-16 lg:items-center">
    <div className="w-xl">
      <h1 className="text-white text-3xl lg:text-5xl mt-0 lg:mt-8 text-center lg:text-left">Torne-se um desenvolvedor <span className="text-green">acima da média</span></h1>
      <p className="text-white mt-8 text-md lg:text-xl">Aprenda a desenvolver software de verdade, de qualidade, com quem tem muita experiência prática, e torne-se um profissional acima da média e requisitado pelo mercado.</p>
      
      <div className="mt-12 flex justify-center hidden lg:block">
        <div className="w-9/12 lg:w-2/4">
         
          <Button>
            Garantir minha vaga
          </Button>

        </div>
      </div>

    </div>
    <div className="w-full flex flex-col mt-8 lg:ml-8 lg:mt-0">
      <YoutubeEmbed embedId="QCjUYgG-QZI" />
      <div className="flex justify-end mt-12">
        <img className="hidden lg:block" src="/img/element-header.png" />
      </div>
    </div>
    <div className="mt-12 flex justify-center block lg:hidden">
        <div className="w-10/12 md:w-6/12 lg:w-8/12">
          <Button>
            Garantir minha vaga
          </Button>
        </div>
    </div>
   
    
    <div className="flex w-full justify-end mt-12 lg:hidden">
      <img className="block lg:hidden" src="/img/element-header.png" />
    </div>
  </section>
)