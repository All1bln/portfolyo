import Arkaplan from './components/Arkaplan'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hakkimda from './components/Hakkimda'
import Projeler from './components/Projeler'
import Iletisim from './components/Iletisim'
import Footer from './components/Footer'
import Belir from './components/Belir'
import './App.css'

function App() {
  return (
    <>
      <Arkaplan />
      <Navbar />
      <main>
        <Hero />
        <Belir>
          <Hakkimda />
        </Belir>
        <Projeler />
        <Belir>
          <Iletisim />
        </Belir>
      </main>
      <Footer />
    </>
  )
}

export default App