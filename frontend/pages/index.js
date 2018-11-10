// Do not need to import React - Next.js handles import
import Link from 'next/link'

const Home = () => (
  <div>
    <p>Hey!</p>

    {/* Next.js Link - Renders a standard <a/> tag but is bound to HTML5 push state */}
    <Link href='sell'>
      <a>Sell!</a>
    </Link>
  </div>
)

export default Home