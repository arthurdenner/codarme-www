import { subHours } from 'date-fns'

const isWeekAvaliable = () => new Date() < new Date('2021-04-12T00:00:00-03:00')
const isPageAvaliable = date => new Date >= subHours(new Date(date), 21) && isWeekAvaliable()
const isVideoAvaliable = date => new Date() >= new Date(date)


const classes = {
  0: '2021-04-05T15:00:00-03:00',
  1: '2021-04-06T15:00:00-03:00',
  2: '2021-04-07T15:00:00-03:00',
  3: '2021-04-08T15:00:00-03:00',
  4: '2021-04-09T15:00:00-03:00',
}

export const aulas = [
  { name: 'Aula 01', day: '05/04', slug: 'aula-01', available: isPageAvaliable(classes[0]), isVideoAvailable: isVideoAvaliable(classes[0]), current: false },
  { name: 'Aula 02', day: '06/04', slug: 'aula-02', available: isPageAvaliable(classes[1]), isVideoAvailable: isVideoAvaliable(classes[1]), current: false },
  { name: 'Aula 03', day: '07/04', slug: 'aula-03', available: isPageAvaliable(classes[2]), isVideoAvailable: isVideoAvaliable(classes[2]), current: false },
  { name: 'Aula 04', day: '08/04', slug: 'aula-04', available: isPageAvaliable(classes[3]), isVideoAvailable: isVideoAvaliable(classes[3]), current: false },
  { name: 'Aula 05', day: '09/04', slug: 'aula-05', available: isPageAvaliable(classes[4]), isVideoAvailable: isVideoAvaliable(classes[4]), current: false }
]



