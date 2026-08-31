import { useRef } from 'react'

import { Link } from 'react-router-dom'

import ProjectLogic, { createStageTitleText } from './Project.logic'
import styles from '/assets/scss/components/section/Project.module.scss'
import mediaStyles from '/assets/scss/components/section/ProjectMedia.module.scss'

const Project = () => {
  const showGsttDetail = false
  const rootRef = useRef<HTMLElement | null>(null)
  const { project, openMoWin, openTabletWin, openAppleAlert } = ProjectLogic(rootRef)
  const stageTitleText = createStageTitleText(project[0]?.name)

  return (
    <section
      ref={rootRef}
      id="project"
      className={`${styles['project-page']} ${mediaStyles['project-page']}`}
      aria-labelledby="project-title"
    >
      <h2 id="project-title" lang="ko">프로젝트</h2>
      <div className={mediaStyles['project-gallery']}>
        <div
          className={`${styles['project-canvas']} ${mediaStyles['project-canvas']}`}
          style={{ '--project-count': project.length } as React.CSSProperties}
        >
          <div className={`${styles['project-stage']} ${mediaStyles['project-stage']}`}>
            <p
              className={`${styles['stage-marquee']} ${mediaStyles['stage-marquee']}`}
              aria-hidden="true"
            >
              {stageTitleText}
            </p>
            <div
              className={`${styles['stage-orbit']} ${mediaStyles['stage-orbit']}`}
              aria-hidden="true"
            >
              <span className={styles['float-b']}></span>
              <span className={styles['stage-orbit-dot']}></span>
            </div>
            <ol
              className={`${styles['project-track']} ${mediaStyles['project-track']}`}
              aria-label="프로젝트 목록"
            >
              {project.map((project, projectIndex) => (
                <li
                  key={projectIndex}
                  className={`${styles['project-card']} ${mediaStyles['project-card']}`}
                >
                  <section className={`${styles['project-info']} ${mediaStyles['project-info']}`}>
                    <div className={styles['project-title-mask']}>
                      <h3>{project.name}</h3>
                    </div>
                    <p className={styles['project-desc']}>{project.dec}</p>
                    {project.name === '프라뱅 하이브리드앱' ||
                    project.name === 'GSTT 하이브리드앱' ? (
                      <nav
                        className={`${styles['btn-box']} ${mediaStyles['btn-box']}`}
                        aria-label={`${project.name} 관련 링크`}
                      >
                        <a
                          href={project.google || '#'}
                          className={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          google Play
                          <img src={project.icon} alt="" className={styles['btn-icon']}></img>
                        </a>
                        {project.apple && project.apple.startsWith('http') ? (
                          <a
                            href={project.apple}
                            className={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            apple Store
                            <img src={project.icon} alt="" className={styles['btn-icon']}></img>
                          </a>
                        ) : (
                          <button
                            type="button"
                            className={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`}
                            onClick={() => openAppleAlert(project.apple)}
                          >
                            apple Store
                            <img src={project.icon} alt="" className={styles['btn-icon']}></img>
                          </button>
                        )}
                      </nav>
                    ) : (
                      <nav
                        className={`${styles['btn-box']} ${mediaStyles['btn-box']}`}
                        aria-label={`${project.name} 관련 링크`}
                      >
                        <a
                          href={project.link || '#'}
                          className={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']} ${styles['btn-desktop-only']} ${mediaStyles['btn-desktop-only']}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.pcTxt?.replace(' View', '')}
                          <img src={project.icon} alt="" className={styles['btn-icon']}></img>
                        </a>
                        <button
                          type="button"
                          className={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']} ${styles['btn-desktop-only']} ${mediaStyles['btn-desktop-only']}`}
                          onClick={() =>
                            project.responsiveMessage
                              ? openAppleAlert(project.responsiveMessage)
                              : openTabletWin(project.link)
                          }
                        >
                          {project.tabletTxt?.replace(' View', '')}
                          <img src={project.icon} alt="" className={styles['btn-icon']}></img>
                        </button>
                        <button
                          type="button"
                          className={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']} ${styles['btn-desktop-only']} ${mediaStyles['btn-desktop-only']}`}
                          onClick={() =>
                            project.responsiveMessage
                              ? openAppleAlert(project.responsiveMessage)
                              : openMoWin(project.link)
                          }
                        >
                          {project.moTxt?.replace(' View', '')}
                          <img src={project.icon} alt="" className={styles['btn-icon']}></img>
                        </button>
                        {showGsttDetail && project.name === 'GSTT' ? (
                          <Link
                            to="/gstt-detail"
                            className={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']} ${styles['btn-desktop-only']} ${mediaStyles['btn-desktop-only']}`}
                          >
                            {project.detail}
                          </Link>
                        ) : null}
                        <a
                          href={project.link || '#'}
                          className={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']} ${styles['btn-mobile-only']} ${mediaStyles['btn-mobile-only']}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                          <img src={project.icon} alt="" className={styles['btn-icon']}></img>
                        </a>
                      </nav>
                    )}
                  </section>
                  <figure className={`${styles['project-img']} ${mediaStyles['project-img']}`}>
                    <img
                      src={project.img}
                      alt={project.alt}
                      loading="lazy"
                      fetchPriority="low"
                      decoding="async"
                    ></img>
                  </figure>
                  <aside className={`${styles['project-stack']} ${mediaStyles['project-stack']}`}>
                    <strong className={`${styles['stack-label']} ${mediaStyles['stack-label']}`}>
                      해쉬태그
                    </strong>
                    <ul
                      className={`${styles['hashtags']} ${mediaStyles['hashtags']}`}
                      aria-label="기술 및 역할"
                    >
                      {project.hashTag.map((tag, tagIndex) => (
                        <li key={tagIndex}>{tag}</li>
                      ))}
                    </ul>
                  </aside>
                </li>
              ))}
            </ol>
            <div
              className={`${styles['stage-progress']} ${mediaStyles['stage-progress']}`}
              aria-hidden="true"
            >
              <span className={styles['stage-progress-num']}>01</span>
              <span className={styles['stage-progress-track']}>
                <span className={styles['stage-progress-fill']}></span>
              </span>
              <span className={styles['stage-progress-num']}>
                {String(project.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
