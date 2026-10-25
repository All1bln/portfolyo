const beceriler = [
  'React',
  'JavaScript',
  'Unreal Engine 5',
  'Veri Analizi',
  'Oyun Geliştirme',
  'Ekip Yönetimi'
]

function Hakkimda() {
  return (
    <section className="bolum" id="hakkimda">
      <h2 className="bolum-baslik">Hakkımda</h2>

      <div className="hakkimda-icerik">
        <p>
          Ben Ali. Team Maniac Studios'un kurucu ortağı ve yazılım geliştiricisiyim.
          Oyun geliştirmenin yanında veri analizi ile de ilgileniyorum.
        </p>
        <p>
          Profesyonelliğim veri analiz üzerine ve 4 yıllık bir tecrübeye sahibim. Aynı zamanda oyun geliştirme de 1 yıllık tecrübeye sahibim. Unreal engine 5 ile oyun geliştirme konusunda kendimi geliştirmeye devam ediyorum. Ayrıca ekip yönetimi konusunda da deneyim sahibiyim.
          Çok kompleks veriler üzerinde çalışmış birisiyim. Projelerim kısmında daha detaylı görebilirsiniz. 
        </p>
      </div>

      <h3 className="alt-baslik">Becerilerim</h3>
      <ul className="beceri-listesi">
        {beceriler.map((beceri) => (
          <li key={beceri}>{beceri}</li>
        ))}
      </ul>
    </section>
  )
}

export default Hakkimda