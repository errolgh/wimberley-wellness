import React, { useRef } from 'react'
import { motion as m, useTransform, useScroll } from 'framer-motion'
import chairs from '../images/parallax-chairs.jpg'

export default function ParallaxHero() {
  const ref = useRef(null)
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.1px', 'end start'],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0.1%', '80%'])
  let textY = useTransform(scrollYProgress, [0, 1], ['0%', '45%'])

  return (
    <header className='mb-64'>
      <div ref={ref} className="text-center relative w-full overflow-hidden">
        <m.img
          style={{ y: backgroundY }}
          src={chairs}
          alt="Wimberley Office"
          className="object-cover tint -z-10 w-full"
        />
        <m.div
          style={{ y: textY }}
          className="absolute text-slate-200 inset-0 flex flex-col justify-center items-center"
        >
          <h1 className="font-bold font-serif text-7xl mb-4">Therapy in Baltimore.</h1>
          <p className="text-3xl max-w-xl text-slate-200">
            Guiding Your Journey to Personal Growth and Transcendence.
          </p>
        </m.div>
      </div>
    </header>
  )
}
