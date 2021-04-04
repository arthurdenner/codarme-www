const Week = () => (
 <></>
)

Week.getInitialProps = ({ res }) => {
  const { NEXT_PUBLIC_AULA_01, NEXT_PUBLIC_AULA_02, NEXT_PUBLIC_AULA_03, NEXT_PUBLIC_AULA_04, NEXT_PUBLIC_AULA_05 } = process.env


  const availableClasses = [NEXT_PUBLIC_AULA_01, NEXT_PUBLIC_AULA_02, NEXT_PUBLIC_AULA_03, NEXT_PUBLIC_AULA_04, NEXT_PUBLIC_AULA_05];


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

