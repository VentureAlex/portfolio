const nav = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Header({ name }) {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        Curiosity is the spark of greatness.
      </a>
      <nav className="header__nav" aria-label="Primary">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className="header__link">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}