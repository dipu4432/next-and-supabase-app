import Link from 'next/link';

const Navigation = () => {
  return (
    <div>
        <nav className="font-mono">
            <ul className="flex md:space-x-4 md:flex-row">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/about/projects">Projects</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navigation