import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { ComponentOptions, CSSProperties, DefineComponent } from 'vue'

import SkillLogic from './Skill.logic'
import styles from '/assets/scss/components/section/Skill.module.scss'
import mediaStyles from '/assets/scss/components/section/SkillMedia.module.scss'


type SkillItem = {
  name: string
  level?: number
  type?: string
}

type SkillGroup = {
  title: string
  icon: string
  alt: string
  skills: SkillItem[]
}

type SkillView = {
  front: SkillGroup
  design: SkillGroup
  collaboration: SkillGroup
  etc: SkillGroup
}

const Skill: ComponentOptions = {
  name: 'Skill',
  extends: SkillLogic,
  render() {
    const { front, design, collaboration, etc } = this as unknown as SkillView

    return (
      <section id="skill" class={`${styles['skill-page']} ${mediaStyles['skill-page']}`}>
        <section class={`${styles['skill__inner']} ${mediaStyles['skill__inner']}`}>
          <h1 lang="en">Skill & Tool</h1>
          <ul class={`${styles['skills-box']} ${mediaStyles['skills-box']}`}>
            <li class={`${styles['skill__inner']} ${mediaStyles['skill__inner']} ${styles['glass']} ${styles['reveal']}`}>
              <ul class={`${styles['skill-list']} ${mediaStyles['skill-list']}`}>
                <li>
                  <section class={`${styles['icon-box']} ${mediaStyles['icon-box']} ${styles['front']}`}>
                    <img src={front.icon} alt={front.alt} />
                  </section>
                  <h3>{front.title}</h3>
                </li>
                {front.skills.map((skill, index) => (
                  <li key={index} {...{ type: skill.type }}>
                    <p class={`${styles['skill-name']} ${mediaStyles['skill-name']}`} lang="en">{skill.name}</p>
                    <section class={`${styles['skill-level']}`}>
                      <div
                        class={`${styles['skill-bar']}`}
                        style={{ '--target-width': `${skill.level}%` } as CSSProperties}
                      >
                        <span class={`${styles['skill-text']}`}>{skill.level}%</span>
                      </div>
                    </section>
                  </li>
                ))}
              </ul>
            </li>
            <li class={`${styles['skill__inner']} ${mediaStyles['skill__inner']} ${styles['design-skill']} ${mediaStyles['design-skill']} ${styles['glass']} ${styles['reveal']}`}>
              <ul class={`${styles['skill-list']} ${mediaStyles['skill-list']}`}>
                <li>
                  <section class={`${styles['icon-box']} ${mediaStyles['icon-box']} ${styles['design']}`}>
                    <img src={design.icon} alt={design.alt} />
                  </section>
                  <h3>{design.title}</h3>
                </li>
                {design.skills.map((skill, index) => (
                  <li key={index}>
                    <p class={`${styles['skill-name']} ${mediaStyles['skill-name']}`} lang="en">{skill.name}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li class={`${styles['skill__inner']} ${mediaStyles['skill__inner']} ${styles['collaboration-skill']} ${mediaStyles['collaboration-skill']} ${styles['glass']} ${styles['reveal']}`}>
              <ul class={`${styles['skill-list']} ${mediaStyles['skill-list']}`}>
                <li>
                  <section class={`${styles['icon-box']} ${mediaStyles['icon-box']} ${styles['collaboration']}`}>
                    <img src={collaboration.icon} alt={collaboration.alt} />
                  </section>
                  <h3>{collaboration.title}</h3>
                </li>
                {collaboration.skills.map((skill, index) => (
                  <li key={index}>
                    <p class={`${styles['skill-name']} ${mediaStyles['skill-name']}`} lang="en">{skill.name}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li class={`${styles['skill__inner']} ${mediaStyles['skill__inner']} ${styles['etc-skill']} ${styles['glass']} ${styles['reveal']}`}>
              <ul class={`${styles['skill-list']} ${mediaStyles['skill-list']}`}>
                {etc.skills.map((skill, index) => (
                  <li
                    key={index}
                    class={`${styles['skill-li']} ${mediaStyles['skill-li'] ?? ''} ${
                      skill.name === 'Three.js'
                        ? `${styles['three-li'] ?? ''} ${mediaStyles['three-li'] ?? ''}`
                        : ''
                    } ${
                      skill.name === 'React Native'
                        ? `${styles['react-native-li'] ?? ''} ${mediaStyles['react-native-li'] ?? ''}`
                        : ''
                    } ${
                      skill.name === 'Php'
                        ? `${styles['php-li'] ?? ''} ${mediaStyles['php-li'] ?? ''}`
                        : ''
                    }`}
                  >
                    <p class={`${styles['skill-name']} ${mediaStyles['skill-name']}`} lang="en">{skill.name}</p>
                    {skill.name === 'Three.js' ? (
                      <section class={`${styles['etc-skill-tab']}`}>
                        <a
                          href="https://github.com/leekiwon31221213/threeJs-3Djs-"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Three.js 공부
                          <FontAwesomeIcon icon={['fas', 'angle-down']}></FontAwesomeIcon>
                        </a>
                      </section>
                    ) : null}
                    {skill.name === 'React Native' ? (
                      <section class={`${styles['etc-skill-tab']}`}>
                        <a
                          href="https://github.com/leekiwon31221213/stockNewsApp"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          React Native 공부
                          <FontAwesomeIcon icon={['fas', 'angle-down']}></FontAwesomeIcon>
                        </a>
                      </section>
                    ) : null}
                    {skill.name === 'Php' ? (
                      <section class={`${styles['etc-skill-tab']}`}>
                        <a href="http://cute01232.dothome.co.kr/" target="_blank">
                          투두리스트
                          <FontAwesomeIcon icon={['fas', 'angle-down']}></FontAwesomeIcon>
                        </a>
                        <a href="https://cute01233.dothome.co.kr/" target="_blank">
                          게시판 만들기
                          <FontAwesomeIcon icon={['fas', 'angle-down']}></FontAwesomeIcon>
                        </a>
                        <a href="https://cute012345.dothome.co.kr/" target="_blank">
                          PHP공부 리스트
                          <FontAwesomeIcon icon={['fas', 'angle-down']}></FontAwesomeIcon>
                        </a>
                      </section>
                    ) : null}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </section>
      </section>
    )
  },
}

export default Skill as DefineComponent
