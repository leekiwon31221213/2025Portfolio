import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { ComponentOptions, DefineComponent } from 'vue'

import CareerLogic from './Career.logic'
import styles from '/assets/scss/components/section/Career.module.scss'
import mediaStyles from '/assets/scss/components/section/CareerMedia.module.scss'


type Education = {
  logo: string
  alt: string
  edu: string
  study: string
  span: string
}

type Career = {
  logo: string
  alt: string
  companyName: string
  business: string
  team: string
  work1: string
  work2?: string
  work3?: string
  work4?: string
}

type CareerView = {
  education: Education[]
  displayedCareers: Career[]
  loadMore: () => void
}

const CareerComponent: ComponentOptions = {
  name: 'Career',
  extends: CareerLogic,
  render() {
    const { education, displayedCareers, loadMore } = this as unknown as CareerView

    return (
      <>
        <section id="education" class={`${styles['career-page']} ${mediaStyles['career-page']}`}>
          <h1>Education</h1>
          <ul class={`${styles['education__inner']} ${mediaStyles['education__inner']}`}>
            {education.map((education, index) => (
              <li key={index}>
                <section class={`${styles['img-box']} ${mediaStyles['img-box']}`}>
                  <img src={education.logo} alt={education.alt} />
                </section>
                <section class={`${styles['educatio-business-box']} ${mediaStyles['educatio-business-box']}`}>
                  <h3>{education.edu}</h3>
                  <p>{education.span}</p>
                </section>
                <p class={`${styles['team-txt']}`}>{education.study}</p>
              </li>
            ))}
          </ul>
        </section>
        <section id="career" class={`${styles['career-page']} ${mediaStyles['career-page']}`}>
          <h1>Career</h1>
          <ul class={`${styles['career__inner']} ${mediaStyles['career__inner']}`}>
            {displayedCareers.map((career, index) => (
              <li key={index}>
                <section class={`${styles['img-box']} ${mediaStyles['img-box']} ${career.alt === '증산클라비어' ? `${styles['jc']} ${mediaStyles['jc']}` : ''}`}>
                  <img src={career.logo} alt={career.alt} />
                </section>
                <section class={`${styles['company-business-box']} ${mediaStyles['company-business-box']}`}>
                  <h3>{career.companyName}</h3>
                  <p>{career.business}</p>
                </section>
                <p class={`${styles['team-txt']}`}>{career.team}</p>
                <p>
                  {career.work1}<br />
                  {career.work2}
                  {career.work3 ? <><br />{career.work3}</> : null}
                  {career.work4 ? <><br />{career.work4}</> : null}
                </p>
              </li>
            ))}
          </ul>
          <section class={`${styles['btn-box']} ${mediaStyles['btn-box']}`}>
            <button type="button" onClick={loadMore} id="more-btn">
              더 보기
              <FontAwesomeIcon icon={['fas', 'angle-down']}></FontAwesomeIcon>
            </button>
          </section>
        </section>
      </>
    )
  },
}

export default CareerComponent as DefineComponent
