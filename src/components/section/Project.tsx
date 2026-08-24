import { Link } from 'react-router-dom'

import ProjectLogic from './Project.logic'
import styles from '/assets/scss/components/section/Project.module.scss'
import mediaStyles from '/assets/scss/components/section/ProjectMedia.module.scss'

const Project = () => {
  const showGsttDetail = false
  const {
    loopProjects,
    galleryTrack,
    galleryViewport,
    handleWheel,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleGalleryClick,
    openMoWin,
    openTabletWin,
    openAppleAlert,
  } = ProjectLogic()

  return (
    <section id="project" className={`${styles['project-page']} ${mediaStyles['project-page']}`}>
      <h2>Frontend Project</h2>
      <section
        ref={galleryViewport}
        className={`${styles['project-gallery']} ${mediaStyles['project-gallery']}`}
        aria-label="무한히 흐르는 프로젝트 목록"
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClick={handleGalleryClick}
      >
        <ul
          ref={galleryTrack}
          className={`${styles['project-track']} ${mediaStyles['project-track']}`}
        >
          {loopProjects.map(({ project, originalIndex }, loopIndex) => (
            <li
              key={`${originalIndex}-${loopIndex}`}
              className={`${styles['project-card']} ${mediaStyles['project-card']}`}
            >
              <img
                src={project.img}
                alt={project.alt}
                className={`${styles['project-img']} ${mediaStyles['project-img']}`}
                draggable={false}
              />
              <h3>{project.name}</h3>
              <p>{project.dec}</p>
              <section className={`${styles['hashtags']} ${mediaStyles['hashtags']}`}>
                {project.hashTag.map((tag, tagIndex) => (
                  <span key={tagIndex}>#{tag}</span>
                ))}
              </section>
              {project.name === '프라뱅 하이브리드앱' ||
              project.name === 'GSTT 하이브리드앱' ? (
                <section className={`${styles['btn-box']} ${mediaStyles['btn-box']}`}>
                  <a
                    href={project.google || '#'}
                    className={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    google Play
                    <img src={project.icon} alt="" className={styles['btn-icon']} />
                  </a>
                  {project.apple && project.apple.startsWith('http') ? (
                    <a
                      href={project.apple}
                      className={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      apple Store
                      <img src={project.icon} alt="" className={styles['btn-icon']} />
                    </a>
                  ) : (
                    <button
                      type="button"
                      className={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`}
                      onClick={() => openAppleAlert(project.apple)}
                    >
                      apple Store
                      <img src={project.icon} alt="" className={styles['btn-icon']} />
                    </button>
                  )}
                </section>
              ) : (
                <section className={`${styles['btn-box']} ${mediaStyles['btn-box']}`}>
                  <a
                    href={project.link || '#'}
                    className={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.pcTxt}
                    <img src={project.icon} alt="" className={styles['btn-icon']} />
                  </a>
                  <button
                    type="button"
                    className={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`}
                    onClick={() => openMoWin(project.link)}
                  >
                    {project.moTxt}
                    <img src={project.icon} alt="" className={styles['btn-icon']} />
                  </button>
                  <button
                    type="button"
                    className={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`}
                    onClick={() => openTabletWin(project.link)}
                  >
                    {project.tabletTxt}
                    <img src={project.icon} alt="" className={styles['btn-icon']} />
                  </button>
                  {showGsttDetail && project.name === 'GSTT' ? (
                    <Link
                      to="/gstt-detail"
                      className={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`}
                    >
                      {project.detail}
                    </Link>
                  ) : null}
                </section>
              )}
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Project
