function Footer() {
  const yil = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {yil} Aliekber Bilen. Tüm hakları saklıdır.</p>
      <p className="footer-alt">React ve Vite ile kodlandı.</p>
      <a href="#" className="footer-yukari">
        ↑ Yukarı çık
      </a>
    </footer>
  )
}

export default Footer