import { SocialLinks } from '~/components/SocialLinks'
import Logo from './logo.svg'

export const Header = () => (
  <header className="pt-8 flex flex-col lg:flex-row lg:justify-between items-center">
    <div>
      <Logo />
    </div>
  </header>
)