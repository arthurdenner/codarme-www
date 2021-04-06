import { useState} from 'react';
import { questions } from './questions'

const FaqCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="text-white py-4 border-b border-gunmetal cursor pointer w-full cursor-pointer" onClick={toggle}>
      <div className="flex w-full justify-between">
      <p className="text-xl  mb-4">{question}</p>
      <p className="font-bold text-green text-3xl">{isOpen ? '-' : '+'}</p>
      </div>
      <p className={`${isOpen ? 'block' : 'hidden'}`}>{answer}</p>
    </div>
  )
}


export const Faq = () => (
  <section className="mt-20">
    <div className="text-white text-center mb-16">
      <h2 className="text-2xl md:text-4xl mb-8"> Não fique com nenhuma<span className="text-green"> dúvida</span></h2>
      <div className="flex items-center justify-center">
        <p className="md:w-2/3">
          Abaixo respondemos as perguntas mais frequentes sobre o curso. Caso você ainda tenha alguma dúvida, não deixe de entrar em contato com a gente em oi@codar.me
        </p>
      </div>
    </div>
    <div className="flex flex-col justify-center mt-8 mb-16">
      {questions.map((item, index) => (
        <FaqCard {...item} key={index} />
      ))}
   </div>
 </section>
   
)