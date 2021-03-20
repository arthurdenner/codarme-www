import { SocialLinks } from '~/components/SocialLinks'
import Logo from './logo.svg'

export const Header = () => (
  <header className="pt-8 flex justify-between">
    <div>
      <Logo />
    </div>
    <div>
      <SocialLinks color="white"/>
    </div>
  </header>
)