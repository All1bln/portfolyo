import { useEffect, useRef, useState } from 'react'


function Belir({ children, gecikme = 0 }) {
  const ref = useRef(null)
  const [gorunur, setGorunur] = useState(false)

  useEffect(() => {
    const gozlemci = new IntersectionObserver(
      ([giris]) => {
        if (giris.isIntersecting) {
          setGorunur(true)
          gozlemci.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    gozlemci.observe(ref.current)
    return () => gozlemci.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={gorunur ? 'belir goster' : 'belir'}
      style={{ transitionDelay: `${gecikme}ms` }}
    >
      {children}
    </div>
  )
}

export default Belir