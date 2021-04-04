import { SocialLinks } from '~/components/SocialLinks'
import Logo from './logo.svg'

export const Header = () => (
  <header className="pt-8 flex flex-col md:flex-row md:justify-between items-center">
    <div>
      <Logo />
    </div>
  </header>
)