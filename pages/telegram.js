import { Topbar } from '~/components/Topbar';
import { Button } from '~/components/Button';
import Check from './check.svg';

const TelegramDescription = () => (
  <div className='p-3 text-white md:flex-1'>
    <h1 className='text-3xl md:text-4xl lg:text-5xl'>
      Entre para o canal do{' '}
      <span className='text-blue  font-bold'>Telegram</span> da Codar.me
    </h1>
    <div className='mt-10 mb-12'>
      <div className='flex flex-row items-center mb-6'>
        <Check />
        <span className='pl-4 text-xl'>Conteúdos exclusivos</span>
      </div>
      <div className='flex flex-row items-center mb-6'>
        <Check />
        <span className='pl-4 text-xl'>Novidades em primeira mão</span>
      </div>
      <div className='flex flex-row items-center mb-6'>
        <Check />
        <span className='pl-4 text-xl'>Descontos para nossos cursos!</span>
      </div>
    </div>
    <div className='flex flex-col md:flex-1 md:max-w-sm'>
      <Button bg='bg-blue'>Entrar para o canal</Button>
    </div>
  </div>
);

const TelegramImage = () => (
  <div className='p-4 rounded-lg text-white text-center flex flex-col md:flex-1 md:max-w-sm hidden md:block'>
    <img src='/img/telegram.png' />
  </div>
);

const Jumbotron = () => {
  return (
    <div className='max-w-5xl container p-2 flex-1 flex flex-col justify-center md:flex-row md:items-center md:p-4 lg:p-10'>
      <TelegramDescription />
      <TelegramImage />
    </div>
  );
};

const Telegram = () => (
  <div
    className='bg-cover flex flex-1 flex-col'
    style={{ backgroundImage: 'url(/img/bg-hero.png)' }}
  >
    <Topbar />
    <Jumbotron />
  </div>
);

export default function TelegramPage() {
  return <Telegram />;
}
