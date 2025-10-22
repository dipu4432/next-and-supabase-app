import Counter from "@/components/counter";
import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-20 border border-orange-500">
        <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/about/projects">Projects</Link></li>
        </ul>
        <Counter />
    </header>
  )
}

export default Header