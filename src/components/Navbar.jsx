import { useState } from 'react'

const linkler = [
  { ad: 'Hakkımda', hedef: '#hakkimda' },
  { ad: 'Projeler', hedef: '#projeler' },
  { ad: 'İletişim', hedef: '#iletisim' },
]

function Navbar() {
  const [acik, setAcik] = useState(false)

  return (
    <header className="navbar">
      <a href="#" className="logo">
        
      </a>

      <button
        className="menu-buton"
        onClick={() => setAcik(!acik)}
        aria-label="Menüyü aç veya kapat"
      >
        ☰
      </button>

      <nav className={acik ? 'menu acik' : 'menu'}>
        {linkler.map((l) => (
          <a key={l.hedef} href={l.hedef} onClick={() => setAcik(false)}>
            {l.ad}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar