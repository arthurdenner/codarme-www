import { Subtitle } from '../../components/Subtitle'
import { Link } from '~/components/Link'

import Github from './icons/gh.svg'
import Linkedin from './icons/linkedin.svg'


export const AboutBruno = () => (
  <section className="mt-20">
    <Subtitle>Seja guidado por quem já tem <span className="text-green">muita experiência</span>!</Subtitle>
    <div className="flex flex-col-reverse md:flex-row items-center">
      <div className="text-white w-md md:ml-8 text-left md:mr-32">
        <p>
        Bruno Bertolini é desenvolvedor web desde 2006. Criou sua primeira startup em 2010, ajudou a montar MVPs e foi sócio e CTO de diversas outras, como Cuco Helth, Intexfy. Fundou também duas empresas de desenvolvimento de softwares para terceiros (software house), que atenderam grandes clientes como Grupo Kroton, Sebrae e Neoway.
        </p>
        <p className="mt-8 mb-8">
        Foi Front-end Tech Lead na Neoway, Mobile Tech Lead na Juntos Somos Mais, desenvolveu sozinho uma plataforma de vistoria veicular, o Insper, que já fez dezenas de milhares de vistorias, e tem mais de 3 milhões de fotos tiradas pelo aplicativo. Atualmente é Head de Tecnologia na Setta.co, onde conseguiu guiar o time e liberar seu primeiro MPV, já nos primeiros dois meses.
       </p>
       <div className="flex justify-center md:justify-start">
       <div className="flex">
        <Link
          as={Linkedin}
          name="Linkedin"
          href="https://www.linkedin.com/in/brunobertolini/"
          color="white"
        />
        <Link
          as={Github}
          name="Github"
          href="https://github.com/brunobertolini"
          color="white"
        />
      </div>
       </div>
      </div>
      <div className="w-full">
        <img src="/img/bruno-photo.png" />
      </div>
    </div>
  </section>
)