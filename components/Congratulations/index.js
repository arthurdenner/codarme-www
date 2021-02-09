
import Congratulation from './congratulation.svg'
import Email from './email.svg'

export const Congratulations = () => (
  <div className="p-4 bg-gunmetal rounded-lg text-white text-center flex flex-col md:flex-1 md:max-w-sm">
    <h3 className="p-4 text-xl text-green font-bold">
      <Congratulation height={30} className="inline px-6" />
      <span>Parabéns!</span>
      <Congratulation height={30} className="inline px-6" />
    </h3>

    <p className="p-4 font-bold leading-loose md:max-w-sm">
      Esse foi um passo importante para você melhorar cada vez mais como
      desenvolvedor!
    </p>

    <p className="p-4 flex items-center justify-center">
      <Email height={25} className="fill-current inline px-3" color="white" />
      <span>Verifique seu e-mail</span>
    </p>
  </div>
)
