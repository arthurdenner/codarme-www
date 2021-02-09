import sendpulse from 'sendpulse-api'

export default (req, res) => {
  const { name, email, sendPulseID } = req.body

  if (!email || !name || !email.trim() || !name.trim()) {
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
      variables: { name },
    },
  ]

  sendpulse.init(
    process.env.SENDPULSE_KEY,
    process.env.SENDPULSE_SECRET,
    '/tmp/',
    () =>
      sendpulse.addEmails(onAddSuccess, sendPulseID, options)
  )
}
