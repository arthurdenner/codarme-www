import { SocialLinksPerson } from '~/components/SocialLinksPerson'

const Info = () => (
  <div className="p-4 text-white md:flex-1">
    <h2 className="text-2xl font-semibold hidden md:block">
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

export const About = () => {
  return (
    <div className="bg-gunmetal flex flex-1 flex-col">
      <section className="max-w-5xl container p-2 flex-1 flex flex-col-reverse justify-center md:flex-row md:items-center md:p-4 lg:p-10">
        <Info />
        <div className="p-4 rounded-lg text-white  flex flex-col md:flex-1 md:max-w-sm  md:block">
          <h2 className="text-2xl font-semibold md:hidden mt-6 mb-6">
            Seja guidado por quem já tem muita experiência!
          </h2>
          <img src="/img/bruno.png" />
        </div>
      </section>
    </div>
  )
}
