import Github from './icons/gh.svg'
import Fb from './icons/fb.svg'
import Insta from './icons/instagram.svg'
import Youtube from './icons/youtube.svg'
import Telegram from './icons/telegram.svg'

const Link = ({ as, href, name }) => {
  const Icon = as

  return (
    <a
      href={href}
      target="_blank"
      className="px-2 md:px-3"
      onClick={() => fbq('track', `Lead.${name}`)}
    >
      <Icon className="fill-current text-gray hover:text-green" height={30} />
    </a>
  )
}

export const SocialLinks = () => (
  <div className="flex">
    <Link as={Telegram} name="Telegram" href="http://t.me/codarme" />
    <Link as={Youtube} name="Youtube" href="http://youtube.com/codarme" />
    <Link as={Insta} name="Instagram" href="http://instagram.com/codar.me" />
    <Link as={Fb} name="Facebook" href="http://facebook.com/codarme" />
    <Link as={Github} name="Github" href="http://github.com/codarme" />
  </div>
)
