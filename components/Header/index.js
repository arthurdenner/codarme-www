import { useState } from 'react'
import { EmailForm } from '~/components/EmailForm'

import Congratulation from '../Congratulations/congratulation.svg'

import FullLogo from './logo.svg'


const Congratulations = () => (
  <div className="flex items-center">
    <p className="p-4  leading-loose md:max-w-sm text-white">
      <Congratulation height={20} className="inline" /> Boa! Te avisaremos por e-mail assim que a próxima aula estiver disponível!
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
        <EmailForm onSuccess={() => setSubmitted(true)} sendPulseType={'email'} />
      )}
    </div>



  )
}

