import { useEffect, useRef } from 'react'

import styles from '/assets/scss/components/cursor/CustomCursor.module.scss'
import mediaStyles from '/assets/scss/components/cursor/CustomCursorMedia.module.scss'

const CustomCursor = () => {
  const dotRef = useRef<HTMLSpanElement | null>(null)
  const ringRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const supportsCustomCursor = window.matchMedia(
      '(min-width: 1025px) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    ).matches

    if (!supportsCustomCursor) return

    let animationFrameId = 0
    let pointerX = window.innerWidth / 2
    let pointerY = window.innerHeight / 2
    let ringX = pointerX
    let ringY = pointerY

    document.body.classList.add('custom-cursor-active')

    const moveCursor = (event: MouseEvent) => {
      pointerX = event.clientX
      pointerY = event.clientY

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`
      }
    }

    const updateCursorState = (event: MouseEvent) => {
      const target = event.target
      const isInteractive =
        target instanceof Element &&
        Boolean(target.closest('a, button, [role="button"], input, textarea, select'))

      ringRef.current?.setAttribute('data-active', String(isInteractive))
    }

    const showCursor = () => {
      dotRef.current?.setAttribute('data-visible', 'true')
      ringRef.current?.setAttribute('data-visible', 'true')
    }

    const hideCursor = () => {
      dotRef.current?.setAttribute('data-visible', 'false')
      ringRef.current?.setAttribute('data-visible', 'false')
    }

    const animateRing = () => {
      ringX += (pointerX - ringX) * 0.16
      ringY += (pointerY - ringY) * 0.16

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      }

      animationFrameId = requestAnimationFrame(animateRing)
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', updateCursorState)
    document.documentElement.addEventListener('mouseenter', showCursor)
    document.documentElement.addEventListener('mouseleave', hideCursor)
    animationFrameId = requestAnimationFrame(animateRing)

    return () => {
      cancelAnimationFrame(animationFrameId)
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', updateCursorState)
      document.documentElement.removeEventListener('mouseenter', showCursor)
      document.documentElement.removeEventListener('mouseleave', hideCursor)
    }
  }, [])

  return (
    <aside
      className={`${styles['custom-cursor']} ${mediaStyles['custom-cursor']}`}
      aria-hidden="true"
    >
      <span
        ref={ringRef}
        className={`${styles['cursor-ring']} ${mediaStyles['cursor-ring']}`}
        data-active="false"
        data-visible="false"
      ></span>
      <span
        ref={dotRef}
        className={`${styles['cursor-dot']} ${mediaStyles['cursor-dot']}`}
        data-visible="false"
      ></span>
    </aside>
  )
}

export default CustomCursor
