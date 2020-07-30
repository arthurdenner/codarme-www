import { Link } from '../Link'
import Github from './icons/gh.svg'
import Fb from './icons/fb.svg'
import Insta from './icons/instagram.svg'
import Linkedin from './icons/Linkedin.svg'

export const SocialLinksPerson = () => (
  <div className="flex flex-1 items-center justify-center md:justify-start">
    <Link
      as={Linkedin}
      name="Linkedin"
      href="https://www.linkedin.com/in/brunobertolini/"
      color="white"
    />
    <Link
      as={Github}
      name="Github"
      href="https://github.com/brunobertolini"
      color="white"
    />
    <Link
      as={Insta}
      name="Instagram"
      href="https://www.instagram.com/bruno_bertolini/"
      color="white"
    />
    <Link
      as={Fb}
      name="Facebook"
      href="https://www.facebook.com/brunobertolini"
      color="white"
    />
  </div>
)
