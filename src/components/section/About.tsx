import { useRef } from 'react'

import AboutLogic from './About.logic'
import styles from '/assets/scss/components/section/About.module.scss'
import mediaStyles from '/assets/scss/components/section/AboutMedia.module.scss'

type Card = {
  icon: string
  title: string
  description: string
  alt: string
}

const About = () => {
  const rootRef = useRef<HTMLElement | null>(null)
  const { about, settingCard, userCard, optimizeCard, growthCard } = AboutLogic(rootRef)

  const renderCard = (card: Card, className: string) => (
    <li
      className={`${styles[className] ?? ''} ${mediaStyles[className] ?? ''} ${styles['glass']} ${mediaStyles['glass'] ?? ''} ${styles['reveal']} ${mediaStyles['reveal'] ?? ''}`}
    >
      <section className={`${styles['img-box']} ${mediaStyles['img-box']}`}>
        <img
          src={card.icon}
          alt={card.alt}
          loading="lazy"
          fetchPriority="low"
          decoding="async"
        ></img>
      </section>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </li>
  )

  return (
    <section
      ref={rootRef}
      id="about"
      className={`${styles['about-page']} ${mediaStyles['about-page']} ${styles['section2']} ${mediaStyles['section2']}`}
    >
      <h2 lang="ko">소개</h2>
      <article className={`${styles['section__inner']} ${mediaStyles['section__inner']}`}>
        <section className={`${styles['about-content-tie']} ${mediaStyles['about-content-tie']}`}>
          <section
            className={`${styles['about-content']} ${mediaStyles['about-content']} ${styles['pc']} ${mediaStyles['pc']}`}
          >
            <h3>{about.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: about.description }}></p>
          </section>
          <section
            className={`${styles['about-content']} ${mediaStyles['about-content']} ${styles['mo']} ${mediaStyles['mo']}`}
          >
            <h3 dangerouslySetInnerHTML={{ __html: about.moTitle }}></h3>
            <p dangerouslySetInnerHTML={{ __html: about.moDesCription }}></p>
          </section>
          <ul className={`${styles['setting-card']} ${mediaStyles['setting-card']} ${styles['glass']}`}>
            <li className={styles['reveal']}>
              <section className={`${styles['img-box']} ${mediaStyles['img-box']}`}>
                <img
                  src={settingCard.icon}
                  alt={settingCard.alt}
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                ></img>
              </section>
              <h3>{settingCard.title}</h3>
              <p>{settingCard.description}</p>
            </li>
          </ul>
        </section>
        <ul className={`${styles['about-cards']} ${mediaStyles['about-cards']}`}>
          {renderCard(userCard, 'user-card')}
          {renderCard(optimizeCard, 'optimize-card')}
          {renderCard(growthCard, 'growth-card')}
        </ul>
      </article>
    </section>
  )
}

export default About
