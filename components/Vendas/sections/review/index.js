import Avatar from './icon.svg'
import React from 'react'



const CardReview = ({ icon, text }) => (
  <div className="mb-8">
  <img src="/img/video.jpg" />
  <p className="text-white text-2xl mt-8">Lorem Ipsum</p>
  <p className="text-lighterGray mt-8">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ipsum sed nunc finibus faucibus id imperdiet eros.
  </p>
  </div>
)

const CardReviewText = ({ title, text }) => (
  <div className="mb-8">
    <div className="flex items-center">
      <Avatar /><p className="text-white text-2xl ml-4">{title}</p>
    </div>
    
    <p className="text-white mt-8">
      "{text}"
    </p>
  </div>
)

export const Reviews = () => (
  <section className="mt-32">
    <h2 className="text-white text-4xl text-center mb-24">Relatos <span className="text-green">de quem conhece</span> nosso trabalho</h2>
    <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
      <CardReviewText title="Marcelo Dib Coutinho" text="Curso excelente, ensina os principais fundamentos da linguagem, boas práticas de programação, e com alguns extras que facilitam o entendimento. Recomendo muito fazer esse curso antes de tentar aprender qualquer framework de javascript."/>
      <CardReviewText title="Leonardo Ferreira" text="Decomplicado, sem ego ou vaidade, apenas humildade e um extremo conhecimento... parabens, voce faz a diferenca no nosso pais, pode ter certeza"/>
      <CardReviewText title="Matheus Costa Luz" text="Uma coisa é achar tutoriais...
Outra coisa e achar gente que sabe dizer o PORQUE e não so O QUE deve ser feito.
Não sei quando é seu aniversário, mas já está de parabéns.
Salvou um dos meus projetos + 10k de money."/>
      <CardReviewText title="Gabriel Holanda" text="Seus vídeos são altamente impactantes, eles tranquilizam a nossa cabeça que está acostumada com o 'Voce tem que saber de cor e salteado' que a faculdade nos prega...
Eu por exemplo estou me preparando para uma vaga (minha primeira no ramo), antes dos vídeos estava altamente nervoso com medo de não conseguir fazer um Hello World, mas depois de analisar bem, nosso ramo é assim mesmo, buscar aprender mais e mais, sem medo de pesquisar! Muito obrigado pelo seu conteúdo!"/>
      <CardReviewText title="Gleisson Neves" text="Mano consegui um case depois de tanto te escutar falando: 'quem vai decidir se voce está apto é o seu recrutador'. Sou dev PHP (3 anos de xp) e me candidatei a uma vaga que cobra Laravel e eu sei 0 de Laravel e frameworks PHP"/>
      <CardReviewText title="Guilherme Trivilinz" text="Estou no primeiro período da faculdade e teho 17 anos, consegui meu primeiro estágio e é em uma empresa que trabalha com React Native!
Queria dizer que seus vídeos ajudaram e continuam me ajudando muito, continue com esse trabalho incrível!"/>
      <CardReviewText title="Gabriel Milano" text="Queria dizer que sua página me ajudou com algumas dicas e só to passando para agradecer, porque toda ajuda foi bem vinda em um momento difícil e consegui meu primeiro emprefo na nova carreira."/>
      <CardReviewText title="Tiago Araujo" text="Entrei em uma empresa... como júnior, primeiro emprego, só elogios do time, e uso bastante os conceitos que voce explicou nos seus vídeos de React no YouTube... E principalmente os conselhos de como se comportar com um bom desenvolvedor no telegram."/>
      <CardReviewText title="Wasshington Campos" text="Um dia depois do seu post (Bruno, voce teria alguma dica ou algum requisito que na sua visão de senior é esperado de um entrevistador para vaga de júnior) eu arrumei o primeiro emprego haha, fera demais."/>
    </div>
    
 </section>
   
)
