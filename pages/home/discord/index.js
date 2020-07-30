import { Button } from '~/components/Button'

import DiscordLogo from './discord-logo.svg'

const Info = () => (
  <div className="p-4 text-white md:flex-1">
    <h2 className="text-2xl md:text-3xl font-semibold">
      Já faz parte da nossa comunidade?
    </h2>
    <p className="mt-6 mb-6">
      Lá é o nosso principal canal de comunicação com os alunos, sem contar que
      rola muita coisa boa lá e todos evoluem juntos!
    </p>
    <div className="flex flex-col md:flex-row md:justify-center">
      <Button
        bg="bg-white flex-1 text-black mb-6 md:mr-6 md:mb-0 text-center"
        onClick={() => {
          fbq('track', 'Lead.Discord')
          window.open('https://discord.gg/9DEWaJh')
        }}
      >
        Acessar a comunidade
      </Button>

      <div className="flex items-center justify-center">
        <DiscordLogo height={36} width={146} />
      </div>
    </div>
  </div>
)

export const Discord = () => {
  return (
    <section className="bg-gunmetalDark flex flex-1 flex-col">
      <div
        className="max-w-5xl container md:bg-right-top 0 md:bg-no-repeat md:bg-transparent p-2 flex-1 flex flex-col justify-center md:flex-row md:items-center md:p-4 lg:p-10"
        style={{ backgroundImage: 'url(/img/discord-bg.png)' }}
      >
        <Info />
        <div className="p-4 rounded-lg text-white text-center flex flex-col md:flex-1 md:max-w-sm hidden md:block"></div>
      </div>
    </section>
  )
}
