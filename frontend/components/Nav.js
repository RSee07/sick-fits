import Link from 'next/link'
import NavStyles from './styles/NavStyles'

const Nav = () => (
  <NavStyles>
    {/* Next.js Link - Renders a standard <a/> tag but is bound to HTML5 push state */}
    <Link href='/items'>
      <a>Items</a>
    </Link>
    <Link href='/sell'>
      <a>Sell</a>
    </Link>
    <Link href='/signup'>
      <a>Signup</a>
    </Link>
    <Link href='/orders'>
      <a>Orders</a>
    </Link>
    <Link href='/me'>
      <a>Account</a>
    </Link>
  </NavStyles>
)

export default Nav