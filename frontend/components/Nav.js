import Link from 'next/link'

const Nav = () => (
  <div>
    {/* Next.js Link - Renders a standard <a/> tag but is bound to HTML5 push state */}
    <Link href='sell'>
      <a>Sell!</a>
    </Link>
    <Link href='/'>
      <a>Home!</a>
    </Link>
  </div>
)

export default Nav