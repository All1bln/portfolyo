function Hero() {
  return (
    <section className="giris">
            <div className="giris-metin">
        <p className="giris-selam">Merhaba, ben</p>
        <h1 className="gradyan">Aliekber Bilen</h1>
        <h2>Yazılım Geliştirici & Veri Analisti</h2>
        <p className="giris-aciklama">
          Soyadımın hakkını vererek veri analizi ve oyun geliştirme alanlarında kendimi geliştirmeye devam ediyorum.
        </p>
        <div className="giris-butonlar">
          <a href="#projeler" className="buton">
            Projelerime Bak
          </a>
          <a href="#iletisim" className="buton buton-ikincil">
            İletişime Geç
          </a>
        </div>
      </div>

      <div className="giris-foto">
        <img src="/images/profil.jpeg" alt="Ali" />
      </div>
    </section>
  )
}

export default Hero