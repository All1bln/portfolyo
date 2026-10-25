const baglantilar = [
  {
    ad: 'E-posta',
    deger: 'aliebilen3@gmail.com',
    link: 'mailto:aliebilen3@gmail.com',
  },
  {
    ad: 'GitHub',
    deger: 'github.com/All1bln',
    link: 'https://github.com/All1bln',
  },
  {
    ad: 'LinkedIn',
    deger: 'Aliekber Bilen',
    link: 'https://www.linkedin.com/in/aliekber-bilen-42bb9b211/?isSelfProfile=true',
  },
]

function Iletisim() {
  return (
    <section className="bolum" id="iletisim">
      <h2 className="bolum-baslik">İletişim</h2>
      <p className="iletisim-aciklama">
        Bir proje fikrin ya da sorun varsa bana aşağıdaki yollardan ulaşabilirsin.
      </p>

      <ul className="iletisim-listesi">
        {baglantilar.map((b) => (
          <li key={b.ad}>
            <span className="iletisim-ad">{b.ad}</span>
            <a href={b.link} target="_blank" rel="noreferrer">
              {b.deger}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Iletisim