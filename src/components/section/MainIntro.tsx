import profileImg from '/assets/image/profile_img.webp'
import styles from '/assets/scss/components/section/MainIntro.module.scss'
import mediaStyles from '/assets/scss/components/section/MainIntroMedia.module.scss'

const MainIntro = () => {
  const mainIntro = {
    title: `
      감각으로 설계하고, 디테일로 완성하는<br />
      <strong>ISFJ 프론트엔드 개발자</strong> <br />
      이기원 입니다.
    `,
    description:
      '웹퍼블리셔 경험을 바탕으로 React와 TypeScript 기반의 사용자 중심 인터페이스와 반응형 웹을 구현하는 프론트엔드 개발자입니다.',
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProject = () => {
    const projectSection = document.getElementById('project')
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className={`${styles['main-intro-page']} ${mediaStyles['main-intro-page']} ${styles['section1']} ${mediaStyles['section1']}`}
      id="main-intro"
    >
      <section className={`${styles['section__inner']} ${mediaStyles['section__inner']}`}>
        <ul className={`${styles['section__inner-content']} ${mediaStyles['section__inner-content']}`}>
          <li>
            <h1 dangerouslySetInnerHTML={{ __html: mainIntro.title }}></h1>
            <p>{mainIntro.description}</p>
            <ul className={`${styles['experience-list']} ${mediaStyles['experience-list']}`}>
              <li>웹퍼블리셔 실무 경험</li>
              <li>React·TypeScript 프론트엔드 개발</li>
              <li>반응형 웹·하이브리드 앱 구현</li>
            </ul>
            <nav
              className={`${styles['intro-actions']} ${mediaStyles['intro-actions']}`}
              aria-label="포트폴리오 주요 영역"
            >
              <button
                className={`${styles['glass']} ${mediaStyles['glass']} ${styles['primary-action']}`}
                onClick={scrollToProject}
              >
                <span className={styles['action-label']}>프로젝트 보기</span>
                <svg
                  className={styles['project-wave']}
                  viewBox="0 0 400 60"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="projectButtonGradient" x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#818cf8"></stop>
                      <stop offset="50%" stopColor="#c084fc"></stop>
                      <stop offset="100%" stopColor="#60a5fa"></stop>
                    </linearGradient>
                  </defs>
                  <g className={styles['wave-track']}>
                    <path
                      fill="url(#projectButtonGradient)"
                      d="M0 16 C25 4 45 28 70 16 S115 4 140 16 S175 28 200 16 C225 4 245 28 270 16 S315 4 340 16 S375 28 400 16 V60 H0 Z"
                    ></path>
                  </g>
                </svg>
              </button>
              <button
                className={`${styles['glass']} ${mediaStyles['glass']}`}
                lang="en"
                onClick={scrollToAbout}
              >
                About Me
              </button>
              <a
                className={`${styles['glass']} ${mediaStyles['glass']}`}
                href="tel:01068650947"
              >
                연락하기
              </a>
            </nav>
          </li>
          <li className={`${styles['img-box']} ${mediaStyles['img-box']}`}>
            <section
              className={`${styles['font-end-info-icon']} ${mediaStyles['font-end-info-icon']} ${styles['glass']} ${mediaStyles['glass']}`}
            >
              <span>Frontend Dev</span>
            </section>
            <div className={`${styles['dev-icon']} ${mediaStyles['dev-icon']}`}></div>
            <div className={`${styles['circle']} ${mediaStyles['circle']}`}>
              <img
                src={profileImg}
                alt="프론트엔드 개발자 이기원 프로필"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              ></img>
            </div>
            <div className={`${styles['design-icon']} ${mediaStyles['design-icon']}`}></div>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default MainIntro
