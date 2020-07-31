import { Link } from '~/components/Link'

import Github from './icons/gh.svg'
import Fb from './icons/fb.svg'
import Insta from './icons/instagram.svg'
import Linkedin from './icons/linkedin.svg'

const SocialLinksPerson = () => (
  <div className="flex flex-1 items-center justify-center md:justify-start">
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
    <Link
      as={Insta}
      name="Instagram"
      href="https://www.instagram.com/bruno_bertolini/"
      color="white"
    />
    <Link
      as={Fb}
      name="Facebook"
      href="https://www.facebook.com/brunobertolini"
      color="white"
    />
  </div>
)

const Info = () => (
  <div className="p-4 text-white md:flex-1">
    <h2 className="text-2xl md:text-3xl font-semibold hidden md:block">
      Seja guidado por quem já tem muita experiência!
    </h2>
    <p className="mt-6 mb-4">
      Bruno Bertolini é desenvolvedor web desde 2006. Criou sua primeira startup
      em 2010, ajudou a montar MVPs e foi sócio e CTO de diversas outras, como
      Cuco Helth e Intexfy. Fundou também duas empresas de desenvolvimento de
      softwares para teceiros, que atenderam grandes clientes como Grupo Kroton,
      Sebrae e Neoway.
    </p>
    <p className="mb-8">
      Foi líder técnico front-end na Neoway, desenvolveu sozinho uma plataforma
      de vistoria veícular, o Insper, que já fez dezenas de milhares de
      vistorias, e tem mais de 1,9 milhão de fotos tiradas pelo aplicativo, e
      atualmente é Mobile Tech Lead na Juntos Somos Mais.
    </p>

    <SocialLinksPerson />
  </div>
)

const About = () => {
  return (
    <section className="bg-gunmetal flex flex-1 flex-col">
      <div className="max-w-5xl container p-2 flex-1 flex flex-col-reverse justify-center md:flex-row md:items-center md:p-4 lg:p-10">
        <Info />
        <div className="p-4 rounded-lg text-white  flex flex-col md:flex-1 md:max-w-sm  md:block">
          <h2 className="text-2xl font-semibold md:hidden mt-6 mb-6">
            Seja guidado por quem já tem muita experiência!
          </h2>
          <img src="/img/bruno.png" />
        </div>
      </div>
    </section>
  )
}

export default About
