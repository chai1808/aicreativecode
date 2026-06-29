import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const queryElement = (selector: string): HTMLElement | null =>
  document.querySelector(selector) as HTMLElement | null

const GENTLE_EASE = 'power1.out'

export const setupBlockScrollAnimations = () => {
  const sections = gsap.utils.toArray<HTMLElement>('.block')

  sections.forEach((section) => {
    const titleInwrap = section.querySelector('.-effecttitle .inwrap')
    const copy = section.querySelector('.-effectcopy')
    const content = section.querySelector('.historydl1, .txtbox, .visualthinking')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top center+=200',
        end: 'top center-=100',
        toggleActions: 'play none none reverse',
      },
    })

    if (copy) {
      tl.fromTo(
        copy,
        {
          opacity: 0,
          filter: 'blur(12px)',
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: GENTLE_EASE,
        }
      )
    }

    if (titleInwrap) {
      tl.fromTo(
        titleInwrap,
        {
          opacity: 0,
          color: '#6a5a7a',
          textShadow: '0 0 2px rgba(247, 231, 254, 0.15)',
        },
        {
          opacity: 1,
          y: 0,
          color: '#fff',
          textShadow:
            '0 0 4px #fff, 0 0 10px #f7e7fe, 0 0 20px #f1d6f8, 0 0 30px #c8b4dc, 0 0 40px #9678b4',
          duration: 0.5,
          ease: GENTLE_EASE,
        }
      )
    }

    if (content) {
      tl.fromTo(
        content,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: GENTLE_EASE,
        },
        '>0.25'
      )

      const param = content.querySelector('.param')
      if (param) {
        tl.fromTo(
          param,
          { height: 0, opacity: 0 },
          {
            height: 'calc(100% - 10px)',
            opacity: 1,
            duration: 1.2,
            ease: 'power1.inOut',
          },
          '<'
        )
      }
    }
  })
}

export const setupGeneralScrollAnimations = () => {
  const generalEffects = gsap.utils.toArray<HTMLElement>(
    '#articlewrap > .incnt > .-effect'
  )

  generalEffects.forEach((target) => {
    gsap.fromTo(
      target,
      { opacity: 0, y: 10 },
      {
        scrollTrigger: {
          trigger: target,
          start: 'top center+=150',
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: GENTLE_EASE,
      }
    )
  })
}

export const setupPageShutterAnimation = () => {
  const shutter = queryElement('#pageshutter')
  if (!shutter) return

  const timeline = gsap.timeline()

  timeline.to(
    shutter,
    {
      duration: 2.6,
      delay: 0.2,
      ease: 'power1.inOut',
      onComplete: () => {
        shutter.style.pointerEvents = 'none'
        shutter.style.zIndex = '-1'
        ScrollTrigger.refresh()
      },
    },
    0
  )

  const mainElement = queryElement('#main')
  if (mainElement) {
    timeline.from(
      mainElement,
      {
        duration: 2.6,
        ease: GENTLE_EASE,
      },
      0
    )
  }
}
