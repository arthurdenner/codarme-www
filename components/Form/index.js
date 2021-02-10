import axios from 'axios'
import * as yup from 'yup'
import { useFormik } from 'formik'

import { Button } from '~/components/Button'
import { Input } from '~/components/Input'

const sendPulseTypes = {
  webinario: 'notify-me-webinario',
  home: 'notify-me'
}


export const Form = ({ onSuccess, sendPulseType }) => {
  const onSubmit = async values => {
    try {
      await axios.post(`/api/${sendPulseTypes[sendPulseType]}`, values)
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
      className="p-3 text-white flex flex-col md:flex-1 w-full md:max-w-sm md:ml-4 mt-4"
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