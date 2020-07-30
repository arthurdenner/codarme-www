import { Link } from '../Link'
import Github from './icons/gh.svg'
import Fb from './icons/fb.svg'
import Insta from './icons/instagram.svg'
import Youtube from './icons/youtube.svg'
import Telegram from './icons/telegram.svg'

export const SocialLinks = () => (
  <div className="flex">
    <Link
      as={Telegram}
      name="Telegram"
      href="http://t.me/codarme"
      shouldTrackEvent
    />
    <Link
      as={Youtube}
      name="Youtube"
      href="http://youtube.com/codarme"
      shouldTrackEvent
    />
    <Link
      as={Insta}
      name="Instagram"
      href="http://instagram.com/codar.me"
      shouldTrackEvent
    />
    <Link
      as={Fb}
      name="Facebook"
      href="http://facebook.com/codarme"
      shouldTrackEvent
    />
    <Link
      as={Github}
      name="Github"
      href="http://github.com/codarme"
      shouldTrackEvent
    />
  </div>
)
