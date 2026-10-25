import Belir from './Belir'

const projeler = [
  {
    baslik: 'Soul Poker',
    aciklama: '2D pixel art tarzında bir kart oyunu. Team Maniac Studios bünyesinde geliştiriliyor.',
    teknolojiler: ['Oyun Geliştirme', 'Pixel Art'],
    gorsel: '/images/soul-poker.jpg',
    link: 'https://www.teammaniacstudios.com/',
  },
  {
    baslik: 'Lost in Mind: Chapter 1',
    aciklama: 'Unreal Engine 5 ile geliştirilen psikolojik korku ve hayatta kalma oyunu.',
    teknolojiler: ['Unreal Engine 5', 'Oyun Geliştirme'],
    gorsel: '/images/lost-in-mind.png',
    link: 'https://store.steampowered.com/app/5309370/LOST_IN_MIND_Chapter_1/',
  },
  {
    baslik: 'Portföy Sitem',
    aciklama: 'Şu an baktığın site. React ve Vite ile sıfırdan kodladım.',
    teknolojiler: ['React', 'Vite', 'CSS', 'HTML', 'JavaScript'],
    gorsel: '/images/portfoy.png',
    link: '',
  },
  {
    baslik: 'Karaciğer Nakli Veritabanı',
    aciklama: '600 karaciğer nakilli hastanın bulunduğu 250 parametreli bir veritabanı oluşturdum ve geliştirdim. Google Documents ve Excel kullanarak verileri analize hazır hale getirdim.',
    teknolojiler: ['Veri Analizi', 'Google Documents', 'Excel'],
    link: '',
  },
  {
    baslik: 'Böbrek Nakli Veritabanı',
    aciklama: '2000 parametreli, 200 böbrek nakilli hastanın bulunduğu bir veritabanını oluşturdum ve doldurdum. Google Documents kullanarak verileri analize hazır hale getirdim.',
    teknolojiler: ['Veri Analizi', 'Google Documents'],
    link: '',
  },
]

function Projeler() {
  return (
    <section className="bolum" id="projeler">
      <h2 className="bolum-baslik">Projeler</h2>

      <div className="proje-izgara">
        {projeler.map((proje, index) => (
          <Belir key={proje.baslik} gecikme={(index % 3) * 120}>
            <article className="proje-kart">
              {proje.gorsel && (
                <img
                  className="proje-gorsel"
                  src={proje.gorsel}
                  alt={proje.baslik}
                />
              )}

              <div className="proje-icerik">
                <h3>{proje.baslik}</h3>
                <p>{proje.aciklama}</p>

                <ul className="proje-etiketler">
                  {proje.teknolojiler.map((tek) => (
                    <li key={tek}>{tek}</li>
                  ))}
                </ul>

                {proje.link && (
                  <a href={proje.link} target="_blank" rel="noreferrer">
                    Projeyi Gör →
                  </a>
                )}
              </div>
            </article>
          </Belir>
        ))}
      </div>
    </section>
  )
}

export default Projeler