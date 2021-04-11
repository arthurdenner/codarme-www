const Week = () => (
  <></>
)

Week.getInitialProps = ({ res }) => {
  const location = '/'

  if (res) {
    res.writeHead(302, {
      Location: location
    })

    res.end()
  }

  Router.push(location)
}


export default Week

