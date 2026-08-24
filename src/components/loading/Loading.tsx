import { useLoadingWave } from './Loading.logic'
import styles from '/assets/scss/components/loading/Loading.module.scss'
import mediaStyles from '/assets/scss/components/loading/LoadingMedia.module.scss'

type LoadingProps = {
  onFinished: () => void
}

const Loading = ({ onFinished }: LoadingProps) => {
  const { bubbleElements, loadingPage, setBubbleRef, wavePath } = useLoadingWave(onFinished)

  return (
    <section
      ref={loadingPage}
      className={`${styles['loading-page']} ${mediaStyles['loading-page']}`}
      aria-label="포트폴리오 인트로"
    >
      <svg
        className={`${styles['wave-canvas']} ${mediaStyles['wave-canvas']}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="introTitle"
      >
        <defs>
          <linearGradient id="waterGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#818cf8"></stop>
            <stop offset="50%" stopColor="#c084fc"></stop>
            <stop offset="100%" stopColor="#60a5fa"></stop>
          </linearGradient>
          <clipPath id="waveClip" clipPathUnits="userSpaceOnUse">
            <path ref={wavePath}></path>
          </clipPath>
        </defs>

        <text
          id="introTitle"
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className={`${styles['intro-title']} ${mediaStyles['intro-title']} ${styles['intro-title-dark']}`}
        >
          <tspan x="50%" dy="-0.65em">
            2026 LEE KIWON
          </tspan>
          <tspan x="50%" dy="1.3em">
            PORTFOLIO
          </tspan>
        </text>

        <g clipPath="url(#waveClip)">
          <rect className={styles['water-fill']}></rect>
          {bubbleElements.map((_, index) => (
            <circle
              key={index}
              ref={(element) => setBubbleRef(element, index)}
              className={`${styles['bubble']} ${styles[`bubble-${index + 1}`]}`}
            ></circle>
          ))}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className={`${styles['intro-title']} ${mediaStyles['intro-title']} ${styles['intro-title-light']}`}
          >
            <tspan x="50%" dy="-0.65em">
              2026 LEE KIWON
            </tspan>
            <tspan x="50%" dy="1.3em">
              PORTFOLIO
            </tspan>
          </text>
        </g>
      </svg>
    </section>
  )
}

export default Loading
