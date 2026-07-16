import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#team', label: 'Team' },
  { href: '#legal', label: 'Legal' },
]

export default function Navbar() {
  const [active, setActive] = useState<string>('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const onScroll = () => {
      let current = ''
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id') ?? ''
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav>
      <a href="#home" className="nav-logo" onClick={closeMenu}>
        <img src="/assets/logo.svg" className="nav-emblem" alt="Vajratrix Group logo" />
        <span className="nav-brand">VAJRA<span>TRIX</span> <em>Group</em></span>
      </a>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={closeMenu}
              style={active === item.href.slice(1) ? { color: 'var(--gold)' } : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Connect</a>
        </li>
      </ul>
      <div
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        role="button"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span></span><span></span><span></span>
      </div>
    </nav>
  )
}
