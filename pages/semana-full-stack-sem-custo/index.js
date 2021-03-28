const Week = () => (
 <></>
)

Week.getInitialProps = ({ res }) => {
  const { AULA_05, AULA_04, AULA_03, AULA_02, AULA_01 } = process.env


  const availableClasses = [AULA_01, AULA_02, AULA_03, AULA_04, AULA_05];


  const lastAvailableClass = availableClasses.slice().reverse().find(aula => aula !== undefined);

 
  if (res) { 
    res.writeHead(302, {
    Location: `/semana-full-stack-sem-custo/${lastAvailableClass}`
  })
  res.end()
  } else {      
    Router.push(`/semana-full-stack-sem-custo/${lastAvailableClass}`)
  }


}


export default Week

