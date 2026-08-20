import type { ComponentOptions, DefineComponent, SetupContext } from 'vue'

import { useLoadingWave } from './Loading.logic'
import styles from '/assets/scss/components/loading/Loading.module.scss'
import mediaStyles from '/assets/scss/components/loading/LoadingMedia.module.scss'

const Loading: ComponentOptions = {
  name: 'Loading',
  emits: {
    finished: () => true,
  },
  setup(_, { emit }: SetupContext) {
    const {
      bubbleElements,
      loadingPage,
      setBubbleRef,
      wavePath,
    } = useLoadingWave(emit)

    return () => (
      <section
        ref={loadingPage}
        class={`${styles['loading-page']} ${mediaStyles['loading-page']}`}
        aria-label="포트폴리오 인트로"
      >
        <svg
          class={`${styles['wave-canvas']} ${mediaStyles['wave-canvas']}`}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="introTitle"
        >
          <title id="introTitle">그라데이션 파도가 차오르는 포트폴리오 인트로</title>
          <defs>
            <linearGradient id="waterGradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stop-color="#818cf8"></stop>
              <stop offset="50%" stop-color="#c084fc"></stop>
              <stop offset="100%" stop-color="#60a5fa"></stop>
            </linearGradient>
            <clipPath id="waveClip" clipPathUnits="userSpaceOnUse">
              <path ref={wavePath}></path>
            </clipPath>
          </defs>

          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dominant-baseline="middle"
            class={`${styles['intro-title']} ${mediaStyles['intro-title']} ${styles['intro-title-dark']}`}
          >
            <tspan x="50%" dy="-0.65em">2026 LEE KIWON</tspan>
            <tspan x="50%" dy="1.3em">PORTFOLIO</tspan>
          </text>

          <g clip-path="url(#waveClip)">
            <rect class={styles['water-fill']}></rect>
            {bubbleElements.map((_, index) => (
              <circle
                key={index}
                ref={(element) => setBubbleRef(element as SVGCircleElement | null, index)}
                class={`${styles['bubble']} ${styles[`bubble-${index + 1}`]}`}
              ></circle>
            ))}
            <text
              x="50%"
              y="50%"
              text-anchor="middle"
              dominant-baseline="middle"
              class={`${styles['intro-title']} ${mediaStyles['intro-title']} ${styles['intro-title-light']}`}
            >
              <tspan x="50%" dy="-0.65em">2026 LEE KIWON</tspan>
              <tspan x="50%" dy="1.3em">PORTFOLIO</tspan>
            </text>
          </g>
        </svg>
      </section>
    )
  },
}

export default Loading as DefineComponent
