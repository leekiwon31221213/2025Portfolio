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
      <li class={`${className} glass reveal`}>
        <section class="img-box">
          <img src={card.icon} alt={card.alt} />
        </section>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </li>
    )

    return (
      <section id="about" class={[styles.root, mediaStyles.root, 'section2']}>
        <h1 lang="en">About Me</h1>
        <article class="section__inner">
          <section class="about-content-tie">
            <section class="about-content pc">
              <h2>{about.title}</h2>
              <p innerHTML={about.description}></p>
            </section>
            <section class="about-content mo">
              <h2 innerHTML={about.moTitle}></h2>
              <p innerHTML={about.moDesCription}></p>
            </section>
            <ul class="setting-card glass">
              <li class="reveal">
                <section class="img-box">
                  <img src={settingCard.icon} alt={settingCard.alt} />
                </section>
                <h3>{settingCard.title}</h3>
                <p>{settingCard.description}</p>
              </li>
            </ul>
          </section>
          <ul class="about-cards">
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
