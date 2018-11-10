// Do not need to import React - Next.js handles import
import Link from 'next/link'

const Sell = () => (
  <div>
    <p>Sell!</p>

    {/* Next.js Link - Renders a standard <a/> tag but is bound to HTML5 push state */}
    <Link href='/'>
      <a>Home!</a>
    </Link>
  </div>
)

export default Sell