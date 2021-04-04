import { useRouter } from 'next/router'
import { aulas } from './aulas'



const Badge = ({ isAvailable, index }) =>
  aulas[index].available ? <div className={`bg-${isAvailable[index] ? 'green' : 'gunmetal'} rounded-md pr-2 pl-2 pt-1 pb-1 text-sm text-${isAvailable[index] ? 'white' : 'green'} uppercase mt-2`}>
    Liberada
  </div> : <></>


const isLatest = (index) => index < aulas.length - 1

const lineClass = (index, currentSlug, isAvailable) =>
  aulas[index + 1].available && isAvailable[index] && aulas[index].available !== currentSlug ? 'line active' : 'line'

const contentClass = (available) => `text-${!available ? 'disable' : 'white '} cursor-${!available ? 'not-allowed' : 'pointer'} text-center `


export const Step = ({ isAvailable }) => {

  const route = useRouter()
  const currentSlug = route.pathname.split('/')[2]
  const redirectTo = (to) => route.push(`/semana-full-stack-sem-custo/${to}`)


  return (
    aulas.map(({ available, name, day,isVideoAvailable }, index) => (
      <div className="flex items-center mb-4" key={day} >
        <div className={contentClass(available)} onClick={() => available && redirectTo(available)}>
          <p>{day}</p>
          <p className="font-bold text-xl" >{name}</p>
          {isVideoAvailable && (
            <Badge isAvailable={isAvailable} index={index} />
          )}
        </div>
        {isLatest(index) && (
          <div className={lineClass(index, currentSlug, isAvailable)} disable={!available} />
        )}
      </div>
    ))

  )
}