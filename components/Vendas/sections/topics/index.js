const Card = ({ number, text }) => (
  <div className="bg-green bg-opacity-25  p-8">
    <p className="text-green font-bold text-2xl">
    {number}
    </p>
    <p className="text-white mt-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ipsum sed nunc finibus faucibus id imperdiet eros.
    </p>
  </div>
)

export const Topics = () => (
  <section className="mt-32">
    <h2 className="text-white text-4xl text-center mb-32">O que iremos <span className="text-green">desenvolver</span>?</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 p-16 md:p-0">
      <Card number="01" />
      <Card number="02" />
      <Card number="03" />
      <Card number="04" />
      <Card number="05" />
      <Card number="06" />
      <Card number="07" />
      <Card number="08" />
    </div>
    
 </section>
   
)