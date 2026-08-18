import { withCtx, type ComponentOptions, type DefineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'

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

type ProjectView = {
  project: Project[]
  modules: unknown[]
  onSwiper: (swiper: unknown) => void
  onSlideChange: () => void
  openMoWin: (url?: string) => void
  openTabletWin: (url?: string) => void
  openAppleAlert: (message?: string) => void
}

const ProjectComponent: ComponentOptions = {
  name: 'Project',
  extends: ProjectLogic,
  render() {
    const {
      project,
      modules,
      onSwiper,
      onSlideChange,
      openMoWin,
      openTabletWin,
      openAppleAlert,
    } = this as unknown as ProjectView

    return (
      <section id="project" class={`${styles['project-page']} ${mediaStyles['project-page']}`}>
        <h1>Project</h1>
        <p class={`${styles['dec']} ${mediaStyles['dec']}`}>다양한 프로젝트를 경험하며 쌓아온 결과물을 소개합니다.</p>
        <Swiper
          modules={modules as never[]}
          slidesPerView={3}
          loop={true}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
          {...{ id: 'project-swiper' }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            550: { slidesPerView: 2, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 2, spaceBetween: 80 },
            1025: { slidesPerView: 3, spaceBetween: 80 },
          }}
          v-slots={{
            default: withCtx(() => project.map((project, index) => (
            <SwiperSlide key={index}>
              <ul class={`${styles['project-list']} ${mediaStyles['project-list']}`}>
                <li>
                  <img src={project.img} alt={project.alt} class={`${styles['project-img']} ${mediaStyles['project-img']}`} />
                  <h3>{project.name}</h3>
                  <p>{project.dec}</p>
                  <section class={`${styles['hashtags']} ${mediaStyles['hashtags']}`}>
                    {project.hashTag.map((tag, tagIndex) => (
                      <span key={tagIndex}>#{tag}</span>
                    ))}
                  </section>
                  {project.name === '프라뱅 하이브리드앱' ||
                  project.name === 'GSTT 하이브리드앱' ? (
                    <section class={`${styles['btn-box']} ${mediaStyles['btn-box']}`}>
                      <a href={project.google || '#'} class={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`} target="_blank">
                        google Play
                        <img src={project.icon} alt="arrow icon" class={`${styles['btn-icon']}`} />
                      </a>
                      {project.apple && project.apple.startsWith('http') ? (
                        <a href={project.apple} class={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`} target="_blank">
                          apple Store
                          <img src={project.icon} alt="arrow icon" class={`${styles['btn-icon']}`} />
                        </a>
                      ) : (
                        <button
                          type="button"
                          class={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`}
                          onClick={() => openAppleAlert(project.apple)}
                        >
                          apple Store
                          <img src={project.icon} alt="arrow icon" class={`${styles['btn-icon']}`} />
                        </button>
                      )}
                    </section>
                  ) : (
                    <section class={`${styles['btn-box']} ${mediaStyles['btn-box']}`}>
                      <a href={project.link || '#'} class={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`} target="_blank">
                        {project.pcTxt}
                        <img src={project.icon} alt="arrow icon" class={`${styles['btn-icon']}`} />
                      </a>
                      <button
                        type="button"
                        class={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`}
                        onClick={() => openMoWin(project.link)}
                      >
                        {project.moTxt}
                        <img src={project.icon} alt="arrow icon" class={`${styles['btn-icon']}`} />
                      </button>
                      <button
                        type="button"
                        class={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`}
                        onClick={() => openTabletWin(project.link)}
                      >
                        {project.tabletTxt}
                        <img src={project.icon} alt="arrow icon" class={`${styles['btn-icon']}`} />
                      </button>
                      {project.name === 'GSTT' ? (
                        <RouterLink to="/gstt-detail" class={`${styles['project-btn']} ${mediaStyles['project-btn']} ${styles['glass']} ${mediaStyles['glass']}`}>
                          {project.detail}
                        </RouterLink>
                      ) : null}
                    </section>
                  )}
                </li>
              </ul>
            </SwiperSlide>
            ))),
          }}
        ></Swiper>
      </section>
    )
  },
}

export default ProjectComponent as DefineComponent
