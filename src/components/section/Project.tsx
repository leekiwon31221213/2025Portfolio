import type { ComponentOptions, DefineComponent } from 'vue'
import { RouterLink } from 'vue-router'

import ProjectLogic from './Project.logic'
import styles from '/assets/scss/components/section/Project.module.scss'
import mediaStyles from '/assets/scss/components/section/ProjectMedia.module.scss'

type Project = {
  img: string
  alt: string
  name: string
  dec: string
  hashTag: string[]
  pcTxt?: string
  moTxt?: string
  tabletTxt?: string
  detail?: string
  link?: string
  google?: string
  apple?: string
  icon: string
}

type LoopProject = {
  project: Project
  originalIndex: number
}

type ProjectView = {
  loopProjects: LoopProject[]
  handleWheel: (event: WheelEvent) => void
  handlePointerDown: (event: PointerEvent) => void
  handlePointerMove: (event: PointerEvent) => void
  handlePointerUp: (event: PointerEvent) => void
  handleGalleryClick: (event: MouseEvent) => void
  openMoWin: (url?: string) => void
  openTabletWin: (url?: string) => void
  openAppleAlert: (message?: string) => void
}

const ProjectComponent: ComponentOptions = {
  name: 'Project',
  extends: ProjectLogic,
  render() {
    const showGsttDetail = false
    const {
      loopProjects,
      handleWheel,
      handlePointerDown,
      handlePointerMove,
      handlePointerUp,
      handleGalleryClick,
      openMoWin,
      openTabletWin,
      openAppleAlert,
    } = this as unknown as ProjectView

    return (
      <section id="project" class={`${styles['project-page']} ${mediaStyles['project-page']}`}>
        <h1>Project</h1>
        <section
          ref="galleryViewport"
          class={`${styles['project-gallery']} ${mediaStyles['project-gallery']}`}
          aria-label="무한히 흐르는 프로젝트 목록"
          onWheel={handleWheel}
          onPointerdown={handlePointerDown}
          onPointermove={handlePointerMove}
          onPointerup={handlePointerUp}
          onPointercancel={handlePointerUp}
          onClick={handleGalleryClick}
        >
          <ul ref="galleryTrack" class={`${styles['project-track']} ${mediaStyles['project-track']}`}>
            {loopProjects.map(({ project, originalIndex }, loopIndex) => (
              <li
                key={`${originalIndex}-${loopIndex}`}
                class={`${styles['project-card']} ${mediaStyles['project-card']}`}
              >
                <img src={project.img} alt={project.alt} class={`${styles['project-img']} ${mediaStyles['project-img']}`} draggable="false"></img>
                <h2>{project.name}</h2>
                <p>{project.dec}</p>
                <section class={`${styles['hashtags']} ${mediaStyles['hashtags']}`}>
                  {project.hashTag.map((tag, tagIndex) => (
                    <span key={tagIndex}>#{tag}</span>
                  ))}
                </section>
                {project.name === '프라뱅 하이브리드앱' || project.name === 'GSTT 하이브리드앱' ? (
                  <section class={`${styles['btn-box']} ${mediaStyles['btn-box']}`}>
                    <a href={project.google || '#'} class={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`} target="_blank" rel="noopener noreferrer">
                      google Play
                      <img src={project.icon} alt="arrow icon" class={styles['btn-icon']}></img>
                    </a>
                    {project.apple && project.apple.startsWith('http') ? (
                      <a href={project.apple} class={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`} target="_blank" rel="noopener noreferrer">
                        apple Store
                        <img src={project.icon} alt="arrow icon" class={styles['btn-icon']}></img>
                      </a>
                    ) : (
                      <button type="button" class={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`} onClick={() => openAppleAlert(project.apple)}>
                        apple Store
                        <img src={project.icon} alt="arrow icon" class={styles['btn-icon']}></img>
                      </button>
                    )}
                  </section>
                ) : (
                  <section class={`${styles['btn-box']} ${mediaStyles['btn-box']}`}>
                    <a href={project.link || '#'} class={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`} target="_blank" rel="noopener noreferrer">
                      {project.pcTxt}
                      <img src={project.icon} alt="arrow icon" class={styles['btn-icon']}></img>
                    </a>
                    <button type="button" class={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`} onClick={() => openMoWin(project.link)}>
                      {project.moTxt}
                      <img src={project.icon} alt="arrow icon" class={styles['btn-icon']}></img>
                    </button>
                    <button type="button" class={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`} onClick={() => openTabletWin(project.link)}>
                      {project.tabletTxt}
                      <img src={project.icon} alt="arrow icon" class={styles['btn-icon']}></img>
                    </button>
                    {showGsttDetail && project.name === 'GSTT' ? (
                      <RouterLink to="/gstt-detail" class={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`}>
                        {project.detail}
                      </RouterLink>
                    ) : null}
                  </section>
                )}
              </li>
            ))}
          </ul>
        </section>
      </section>
    )
  },
}

export default ProjectComponent as DefineComponent
