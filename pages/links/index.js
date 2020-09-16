import { Logo } from '~/components/Logo'
import { SocialLinks } from '~/components/SocialLinks'
import { cards } from '~/utils/cards'

const Card = ({ title, destination, slug }) => {
  const handleClick = () => {
    fbq('track', destination, { title, destination, slug })
    window.open(destination)
  }

  return (
    <div
      className="border-2 text-white mt-6 rounded-md p-4 text-center bg-gunmetal border-gray cursor-pointer hover:bg-green hover:font-bold transition duration-500 ease-in-out"
      onClick={handleClick}
    >
      <p>{title}</p>
    </div>
  )
}

const Links = () => (
  <div
    className="bg-cover flex flex-1 flex-col h-full p-4"
    style={{ backgroundImage: 'url(/img/bg-hero.png)' }}
  >
    <div className="container">
      <div className="flex flex-col items-center">
        <Logo color="#fff" width={220} />
        <div class="mt-6 mb-6">
          <SocialLinks />
        </div>
      </div>
      <div>
        {cards.map(card => (
          <Card key={card.slug} {...card} />
        ))}
      </div>
    </div>
  </div>
)

export default Links
