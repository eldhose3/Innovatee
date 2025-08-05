import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollFadeIn({ children, delay = 0.2 }) {
  const el = useRef()

  useEffect(() => {
    gsap.fromTo(
      el.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el.current,
          start: 'top 85%',
        },
      }
    )
  }, [delay])

  return <div ref={el}>{children}</div>
}
