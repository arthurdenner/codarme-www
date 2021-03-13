import sendpulse from 'sendpulse-api'

export default (req, res) => {
  const { email } = req.body

  if (!email || !email.trim()) {
    res.statusCode = 400
    return res.end()
  }

  const onAddSuccess = (result) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json(result)
  }

  const options = [
    {
      email,
    },
  ]

  sendpulse.init(
    process.env.SENDPULSE_KEY,
    process.env.SENDPULSE_SECRET,
    '/tmp/',
    () =>
      sendpulse.addEmails(onAddSuccess, '1148508', options)
  )
}
