import { useState } from 'react'
import { EmailForm } from '~/components/EmailForm'

import Congratulation from '../Congratulations/congratulation.svg'

import FullLogo from './logo.svg'


const Congratulations = () => (
  <div className="flex items-center">
    <h3 className="p-4 text-xl text-green font-bold">
    <Congratulation height={30} className="inline px-6" />
    <span>Parabéns!</span>
    <Congratulation height={30} className="inline px-6" />
    </h3>
    <p className="p-4 font-bold leading-loose md:max-w-sm text-white">
      Esse foi um passo importante para você melhorar cada vez mais como
      desenvolvedor!
    </p>
  </div>
)
export const Header = () => {
  const [formSubmitted, setSubmitted] = useState(false)

 
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center">
    <div className="mt-2 mb-10 md:m-0">
      <FullLogo size={260} />
    </div>
    {formSubmitted ? (
    <Congratulations />
  ) : (
    <EmailForm onSuccess={() => setSubmitted(true)} sendPulseType={'email'}/>
  ) }
  </div>


 
)}

