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

type Journey = {
  logo: string
  alt: string
  type: string
  title: string
  period: string
  description: Array<string | undefined>
}

type CareerView = {
  journey: Journey[]
}

const CareerComponent: ComponentOptions = {
  name: 'Career',
  extends: CareerLogic,
  render() {
    const { journey } = this as unknown as CareerView

    return (
      <section id="journey" class={`${styles['career-page']} ${mediaStyles['career-page']}`}>
        <section class={`${styles['journey-heading']} ${mediaStyles['journey-heading']}`}>
          <p>2014 — NOW</p>
          <h1>My Journey</h1>
          <span>배움에서 실무까지, 지금의 프론트엔드 개발자가 되기까지의 여정</span>
        </section>
        <section class={`${styles['timeline-wrap']} ${mediaStyles['timeline-wrap']}`}>
          <svg
            class={`${styles['timeline-line']} ${styles['desktop-line']} ${mediaStyles['timeline-line']} ${mediaStyles['desktop-line']}`}
            viewBox="0 0 1200 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="journeyLineGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#818cf8"></stop>
                <stop offset="50%" stop-color="#c084fc"></stop>
                <stop offset="100%" stop-color="#60a5fa"></stop>
              </linearGradient>
            </defs>
            <path
              class={styles['timeline-line-bg']}
              d="M600 50 C470 85 470 145 600 180 C730 215 730 275 600 310 C470 345 470 405 600 440 C730 475 730 535 600 570 C470 605 470 665 600 700 C730 735 730 795 600 830 C470 865 470 925 600 960"
            ></path>
            <path
              class={styles['timeline-line-progress']}
              d="M600 50 C470 85 470 145 600 180 C730 215 730 275 600 310 C470 345 470 405 600 440 C730 475 730 535 600 570 C470 605 470 665 600 700 C730 735 730 795 600 830 C470 865 470 925 600 960"
              stroke="url(#journeyLineGradient)"
            ></path>
          </svg>
          <svg
            class={`${styles['timeline-line']} ${styles['mobile-line']} ${mediaStyles['timeline-line']} ${mediaStyles['mobile-line']}`}
            viewBox="0 0 40 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="journeyMobileLineGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#818cf8"></stop>
                <stop offset="50%" stop-color="#c084fc"></stop>
                <stop offset="100%" stop-color="#60a5fa"></stop>
              </linearGradient>
            </defs>
            <path class={styles['timeline-line-bg']} d="M20 20 L20 980"></path>
            <path
              class={styles['timeline-line-progress']}
              d="M20 20 L20 980"
              stroke="url(#journeyMobileLineGradient)"
            ></path>
          </svg>
          <ol class={`${styles['journey__inner']} ${mediaStyles['journey__inner']}`}>
            {journey.map((item, index) => (
              <li key={index}>
                <span class={`${styles['journey-type']} ${mediaStyles['journey-type']}`}>
                  {item.type}
                </span>
                <section
                  class={`${styles['img-box']} ${mediaStyles['img-box']} ${item.alt === '증산클라비어' ? `${styles['jc']} ${mediaStyles['jc']}` : ''}`}
                >
                  <img src={item.logo} alt={item.alt}></img>
                </section>
                <h2>{item.title}</h2>
                <strong>{item.period}</strong>
                {item.description.filter(Boolean).map((description, descriptionIndex) => (
                  <p key={descriptionIndex}>{description}</p>
                ))}
              </li>
            ))}
          </ol>
        </section>
      </section>
    )
  },
}

export default CareerComponent as DefineComponent
