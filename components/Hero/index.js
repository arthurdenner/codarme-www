

import { Topbar } from '~/components/Topbar'
import { Congratulations } from '~/components/Congratulations'
import { Form } from '~/components/Form'


const Jumbotron = ({ title, presentation, sendPulseID } ) => {
  const [formSubmitted, setSubmitted] = React.useState(false)

  return (
    <div className="max-w-5xl container p-2 flex-1  text-white lg:p-10">
      {title && (
        React.createElement(title)
      )}
    <div className="flex flex-col md:flex-row items-start justify-center"> 
      {React.createElement(presentation)}

      {formSubmitted ? (
        <Congratulations />
      ) : (
        <Form onSuccess={() => setSubmitted(true)} sendPulseID={sendPulseID} />
      )}
    </div>
   
    </div>
  )
}

export const Hero = ({ title, presentation, sendPulseID }) => (
  <div
    className="bg-cover flex flex-1 flex-col h-full"
    style={{ backgroundImage: 'url(/img/bg-hero.png)' }}
  >
    <Topbar  />
    <Jumbotron presentation={presentation} sendPulseID={sendPulseID} title={title}/>
  </div>
)

