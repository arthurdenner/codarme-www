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

const CardReviewText = ({ icon, text }) => (
  <div className="mb-8">
    <div className="flex items-center">
      <Avatar />  <p className="text-white text-2xl ml-4">Lorem Ipsum</p>
    </div>
 
  <p className="text-white mt-8">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ipsum sed nunc finibus faucibus id imperdiet eros.
  </p>
  </div>
)


export const Reviews = () => (
  <section className="mt-32">
    <h2 className="text-white text-4xl text-center mb-24">Relatos <span className="text-green">de quem conhece</span> nosso trabalho</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <CardReview number="01" />
      <CardReview number="02"/>
      <CardReview number="03" />
      <CardReview number="04" />
      <CardReview number="01" />
      <CardReview number="02"/>
    </div>
    <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
      <CardReviewText number="01" />
      <CardReviewText number="02"/>
      <CardReviewText number="03" />
      <CardReviewText number="04" />
      <CardReviewText number="01" />
      <CardReviewText number="02"/>
    </div>
    
 </section>
   
)
