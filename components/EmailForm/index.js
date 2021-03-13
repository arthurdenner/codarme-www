import axios from 'axios'
import * as yup from 'yup'
import { useFormik } from 'formik'

import { Button } from '~/components/Button'
import { Input } from '~/components/Input'

const sendPulseTypes = {
  email: 'notify-me-email',
  webinario: 'notify-me-webinario',
  home: 'notify-me'
}


export const EmailForm = ({ onSuccess, sendPulseType }) => {
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
      className="flex flex-col md:flex-row md:items-end items-center p-4 md:p-0 w-full md:w-2/4"
    >
      <div className="md:mr-4 w-full">
        <p className="text-white mb-4 text-center md:text-left">Nao perca a próxima aula!</p>
        <Input
          type="text"
          name="email"
          placeholder="Digite seu melhor e-mail"
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
          onChange={formik.setFieldValue}
          disabled={formik.isSubmitting}
        />
      </div>
      <div className="mt-4 w-full md:w-2/4">
      <Button type="submit" disabled={formik.isSubmitting}>
        <p className="text-white font-bold">
        {(formik.isSubmitting && 'Deixa eu anotar aqui...') || 'Me avise!'}
        </p>
      </Button>
      </div>
    </form>
  )
}