import { SocialLinks } from '~/components/SocialLinks'




export const AboutBruno = () => (
  <section className="mt-32">
    <h2 className="text-white text-4xl text-center mb-24">Seja guidado por quem já tem <span className="text-green">muita experiência</span>!</h2>
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-md">
        <img src="/img/bruno-photo.png" />
      </div>
      <div className="text-white w-md ml-8 text-right">
        <p>
        Bruno Bertolini é desenvolvedor web desde 2006. Criou sua primeira startup em 2010, ajudou a montar MVPs e foi sócio e CTO de diversas outras, como Cuco Helth e Intexfy. Fundou também duas empresas de desenvolvimento de softwares para teceiros, que atenderam grandes clientes como Grupo Kroton, Sebrae e Neoway.
        </p>
        <p className="mt-8 mb-8">
        Foi Front-end Tech Lead na Neoway, Mobile Tech Lead na Juntos Somos Mais, desenvolveu sozinho uma plataforma de vistoria veícular, o Insper, que já fez dezenas de milhares de vistorias, e tem mais de  1,9 milhão de fotos tiradas pelo aplicativo, e atualmente é responsável pela área técnica da Setta.co
       </p>
       <div className="flex justify-end">
        <SocialLinks color="white"/>
       </div>
      </div>
    </div>
  </section>
)