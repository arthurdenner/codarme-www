import { Link } from '../Link'
import Github from './icons/gh.svg'
import Fb from './icons/fb.svg'
import Insta from './icons/instagram.svg'
import Youtube from './icons/youtube.svg'
import Telegram from './icons/telegram.svg'

export const SocialLinks = ({ color = 'gray' }) => (
  <div className="flex">
    <Link
      as={Telegram}
      name="Telegram"
      href="http://t.me/codarme"
      trackID="Lead.Telegram"
      color={color}
    />
    <Link
      as={Youtube}
      name="Youtube"
      href="http://youtube.com/codarme"
      trackID="Lead.Youtube"
      color={color}
    />
    <Link
      as={Insta}
      name="Instagram"
      href="http://instagram.com/codar.me"
      trackID="Lead.Instagram"
      color={color}
    />
    <Link
      as={Fb}
      name="Facebook"
      href="http://facebook.com/codarme"
      trackID="Lead.Facebook"
      color={color}
    />
    <Link
      as={Github}
      name="Github"
      href="http://github.com/codarme"
      trackID="Lead.Github"
      color={color}
    />
  </div>
)
