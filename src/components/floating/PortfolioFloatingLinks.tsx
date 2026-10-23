import styles from '/assets/scss/components/floating/PortfolioFloatingLinks.module.scss'
import mediaStyles from '/assets/scss/components/floating/PortfolioFloatingLinksMedia.module.scss'

const PortfolioFloatingLinks = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <nav
      className={`${styles['portfolio-floating-links']} ${mediaStyles['portfolio-floating-links']}`}
      aria-label="외부 포트폴리오 및 프로필"
    >
      <button
        className={`${styles['floating-link']} ${mediaStyles['floating-link']}`}
        type="button"
        data-platform="top"
        aria-label="페이지 맨 위로 이동"
        onClick={scrollToTop}
      >
        <svg
          className={`${styles['floating-link-icon']} ${mediaStyles['floating-link-icon']}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 15 6-6 6 6"></path>
        </svg>
        <span
          className={`${styles['floating-link-text']} ${mediaStyles['floating-link-text']}`}
          aria-hidden="true"
        >
          맨 위로
        </span>
      </button>
      <a
        className={`${styles['floating-link']} ${mediaStyles['floating-link']}`}
        href="https://www.linkedin.com/in/cuteone/"
        target="_blank"
        rel="noopener noreferrer"
        data-platform="linkedin"
        aria-label="LinkedIn 프로필 새 창에서 열기"
      >
        <svg
          className={`${styles['floating-link-icon']} ${mediaStyles['floating-link-icon']}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6"></path>
          <path d="M2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
        <span
          className={`${styles['floating-link-text']} ${mediaStyles['floating-link-text']}`}
          aria-hidden="true"
        >
          LinkedIn
        </span>
      </a>
      <a
        className={`${styles['floating-link']} ${mediaStyles['floating-link']}`}
        href="https://www.figma.com/design/UO2hSRmzIRIRBfbx9NQycg/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%8C%EC%9D%BC?t=M4b6SSE9VJxeGmHp-0"
        target="_blank"
        rel="noopener noreferrer"
        data-platform="figma"
        aria-label="페이지별 디자인과 작업 내역이 담긴 Figma 포트폴리오 새 창에서 열기"
      >
        <svg
          className={`${styles['floating-link-icon']} ${mediaStyles['floating-link-icon']}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 2a3 3 0 0 0 0 6h3V2H9z"></path>
          <path d="M12 2h3a3 3 0 1 1 0 6h-3V2z"></path>
          <path d="M9 8a3 3 0 0 0 0 6h3V8H9z"></path>
          <circle cx="15" cy="11" r="3"></circle>
          <path d="M9 14a3 3 0 1 0 3 3v-3H9z"></path>
        </svg>
        <span
          className={`${styles['floating-link-text']} ${mediaStyles['floating-link-text']} ${styles['figma-tooltip']} ${mediaStyles['figma-tooltip']}`}
          aria-hidden="true"
        >
          <strong className={`${styles['tooltip-title']} ${mediaStyles['tooltip-title']}`}>
            Figma 작업 내역
          </strong>
          <span className={`${styles['tooltip-description']} ${mediaStyles['tooltip-description']}`}>
            페이지별 디자인 내역을 확인할 수 있습니다
          </span>
        </span>
      </a>
    </nav>
  )
}

export default PortfolioFloatingLinks
