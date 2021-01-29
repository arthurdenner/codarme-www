import axios from 'axios'
import * as yup from 'yup'
import { useFormik } from 'formik'

import { Topbar } from '~/components/Topbar'
import { Button } from '~/components/Button'
import { Input } from '~/components/Input'

import Congratulation from './congratulation.svg'
import Email from './email.svg'

const Presentation = () => (
  <div className="p-2 text-white md:flex-1">
    <p className="xl:text-1xl">
    Então vem com a gente nessa caminhada e não perca esse webinário.
    </p>
    <p className="mt-2 xl:text-1xl">
    Vamos te ensinar a desenvolver do zero uma ferramenta para agendamentos, mas calma… não é apenas uma "ferramenta para agendamentos”, nesse simples desenvolvimento vamos te ensinar todos os pontos principais para você criar do zero qualquer coisa que você queira e muito mais.
    </p>
    <p className="mt-4 font-bold" style={{fontSize: 18}}>
    Vai ficar de fora dessa, ou vai embarcar nessa para alcançar seus objetivos profissionais e tirar seus projetos do papel?
    </p>
    <p className="mt-2 xl:text-1xl">
    Se inscreve aqui no nosso webinário e fica ligado nos e-mails, porque vem muita coisa boa por ai ;\) te avisamos por lá as datas e horários!
    </p>
    <p className="mt-2 xl:text-1xl font-bold">
    Ao infinito e além!!!
    </p>
  </div>
)

const Form = ({ onSuccess }) => {
  const onSubmit = async values => {
    try {
      await axios.post('/api/notify-me', values)
      fbq('track', 'Lead', values)
      onSuccess()
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    onSubmit,
    validationSchema: yup.object().shape({
      name: yup.string().required('Esqueceu de dizer seu nome :D'),
      email: yup
        .string()
        .required('Sem e-mail, não consigo te enviar as novidades, hehe')
        .email('E-mail inválido'),
    }),
    initialValues: {
      name: '',
      email: '',
    },
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-3 text-white flex flex-col md:flex-1 w-full md:max-w-sm md:ml-4"
    >
      <Input
        type="text"
        name="name"
        placeholder="Digite seu nome"
        value={formik.values.name}
        error={formik.touched.name && formik.errors.name}
        onChange={formik.setFieldValue}
        disabled={formik.isSubmitting}
      />
      <Input
        type="text"
        name="email"
        placeholder="Informe seu melhor e-mail"
        value={formik.values.email}
        error={formik.touched.email && formik.errors.email}
        onChange={formik.setFieldValue}
        disabled={formik.isSubmitting}
      />
      <Button type="submit" disabled={formik.isSubmitting}>
        {(formik.isSubmitting && 'Deixa eu anotar aqui...') || 'Me avise!'}
      </Button>
    </form>
  )
}

const Congratulations = () => (
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

const Jumbotron = () => {
  const [formSubmitted, setSubmitted] = React.useState(false)

  return (
    <div className="max-w-5xl container p-2 flex-1  text-white lg:p-10">
       <h1 className="p-1 text-3xl md:text-4xl lg:text-5xl mb-6">
      Quer <span className="text-green">evoluir</span> na sua carreira como desenvolvedor e ganhar mais dinheiro?
    </h1>
    <div className="flex flex-col md:flex-row items-start justify-center"> 
      <Presentation />

      {formSubmitted ? (
        <Congratulations />
      ) : (
        <Form onSuccess={() => setSubmitted(true)} />
      )}
    </div>
    </div>
  )
}

const Hero = () => (
  <div
    className="bg-cover flex flex-1 flex-col h-full"
    style={{ backgroundImage: 'url(/img/bg-hero.png)' }}
  >
    <Topbar />
    <Jumbotron />
  </div>
)

export default Hero
