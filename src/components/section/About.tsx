import type { ComponentOptions, DefineComponent } from 'vue'

import AboutLogic from './About.logic'
import styles from '/assets/scss/components/section/About.module.scss'
import mediaStyles from '/assets/scss/components/section/AboutMedia.module.scss'


type AboutView = {
  about: {
    title: string
    description: string
    moTitle: string
    moDesCription: string
  }
  settingCard: Card
  userCard: Card
  optimizeCard: Card
  growthCard: Card
}

type Card = {
  icon: string
  title: string
  description: string
  alt: string
}

const About: ComponentOptions = {
  name: 'About',
  extends: AboutLogic,
  render() {
    const { about, settingCard, userCard, optimizeCard, growthCard } = this as unknown as AboutView

    const renderCard = (card: Card, className: string) => (
      <li class={`${styles[className] ?? ''} ${mediaStyles[className] ?? ''} ${styles['glass']} ${mediaStyles['glass'] ?? ''} ${styles['reveal']} ${mediaStyles['reveal'] ?? ''}`}>
        <section class={`${styles['img-box']} ${mediaStyles['img-box']}`}>
          <img src={card.icon} alt={card.alt} />
        </section>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </li>
    )

    return (
      <section id="about" class={`${styles['about-page']} ${mediaStyles['about-page']} ${styles['section2']} ${mediaStyles['section2']}`}>
        <h1 lang="en">About Me</h1>
        <article class={`${styles['section__inner']} ${mediaStyles['section__inner']}`}>
          <section class={`${styles['about-content-tie']} ${mediaStyles['about-content-tie']}`}>
            <section class={`${styles['about-content']} ${mediaStyles['about-content']} ${styles['pc']} ${mediaStyles['pc']}`}>
              <h2>{about.title}</h2>
              <p innerHTML={about.description}></p>
            </section>
            <section class={`${styles['about-content']} ${mediaStyles['about-content']} ${styles['mo']} ${mediaStyles['mo']}`}>
              <h2 innerHTML={about.moTitle}></h2>
              <p innerHTML={about.moDesCription}></p>
            </section>
            <ul class={`${styles['setting-card']} ${mediaStyles['setting-card']} ${styles['glass']}`}>
              <li class={`${styles['reveal']}`}>
                <section class={`${styles['img-box']} ${mediaStyles['img-box']}`}>
                  <img src={settingCard.icon} alt={settingCard.alt} />
                </section>
                <h3>{settingCard.title}</h3>
                <p>{settingCard.description}</p>
              </li>
            </ul>
          </section>
          <ul class={`${styles['about-cards']} ${mediaStyles['about-cards']}`}>
            {renderCard(userCard, 'user-card')}
            {renderCard(optimizeCard, 'optimize-card')}
            {renderCard(growthCard, 'growth-card')}
          </ul>
        </article>
      </section>
    )
  },
}

export default About as DefineComponent
