const Header = () => {
  return (
    <header className="p-20 border border-blue-900">
        <ul className="flex space-x-4">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/about/projects">Projects</a></li>
        </ul>
    </header>
  )
}

export default Header