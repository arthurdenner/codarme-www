import { Hero } from '~/components/Hero'

const Title = () => {
  return (
    <h1 className="p-1 text-2xl md:text-4xl lg:text-5xl mb-6">
      Quer <span className="text-green">evoluir</span> como dev ou  <span className="text-green">desenvolver</span> aquela sua aplicação que não sai do papel?
    </h1>

  )
}

const Presentation = () => (
  <div className="p-2 text-white md:flex-1">
    <p className="mt-4 font-bold" style={{ fontSize: 18 }}>
      Então vem com a gente nesse webinário.
    </p>
    <p className="mt-2 xl:text-1xl">
      Vamos te mostrar como criar uma aplicação completa, front, back e banco de dados, e o melhor: sem gastar nada!
    </p>
    <p className="mt-2 xl:text-1xl">
      Se inscreve pra esse webinário incrível que vai abrir sua mente, e fica ligado no seu e-mail, pois vem muita coisa boa por ai e vamos avisar das datas e horários por lá.
    </p>
    <p className="mt-6 xl:text-1xl font-bold">
      Ao infinito e além!!!
    </p>

  </div>
)


const Webinario = () => {
  return (
    <div
      className="bg-cover flex flex-1 flex-col h-full"
      style={{ backgroundImage: 'url(/img/bg-hero.png)' }}
    >
      <Hero presentation={Presentation} title={Title} sendPulseType="webinario" />
    </div>
  )
}

export default Webinario