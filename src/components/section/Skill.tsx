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
      <section id="skill" class={[styles.root, mediaStyles.root, 'section4']}>
        <section class="skill__inner">
          <h1 lang="en">Skill & Tool</h1>
          <ul class="skills-box">
            <li class="skill__inner front-skill glass reveal">
              <ul class="skill-list">
                <li>
                  <section class="icon-box front">
                    <img src={front.icon} alt={front.alt} />
                  </section>
                  <h3>{front.title}</h3>
                </li>
                {front.skills.map((skill, index) => (
                  <li key={index} {...{ type: skill.type }}>
                    <p class="skill-name" lang="en">{skill.name}</p>
                    <section class="skill-level">
                      <div
                        class="skill-bar"
                        style={{ '--target-width': `${skill.level}%` } as CSSProperties}
                      >
                        <span class="skill-text">{skill.level}%</span>
                      </div>
                    </section>
                  </li>
                ))}
              </ul>
            </li>
            <li class="skill__inner design-skill glass reveal">
              <ul class="skill-list">
                <li>
                  <section class="icon-box design">
                    <img src={design.icon} alt={design.alt} />
                  </section>
                  <h3>{design.title}</h3>
                </li>
                {design.skills.map((skill, index) => (
                  <li key={index}>
                    <p class="skill-name" lang="en">{skill.name}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li class="skill__inner collaboration-skill glass reveal">
              <ul class="skill-list">
                <li>
                  <section class="icon-box collaboration">
                    <img src={collaboration.icon} alt={collaboration.alt} />
                  </section>
                  <h3>{collaboration.title}</h3>
                </li>
                {collaboration.skills.map((skill, index) => (
                  <li key={index}>
                    <p class="skill-name" lang="en">{skill.name}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li class="skill__inner etc-skill glass reveal">
              <ul class="skill-list">
                {etc.skills.map((skill, index) => (
                  <li
                    key={index}
                    class={[
                      'skill-li',
                      {
                        'three-li': skill.name === 'Three.js',
                        'react-native-li': skill.name === 'React Native',
                        'php-li': skill.name === 'Php',
                      },
                    ]}
                  >
                    <p class="skill-name" lang="en">{skill.name}</p>
                    {skill.name === 'Three.js' ? (
                      <section class="three-tab etc-skill-tab">
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
                      <section class="react-native-tab etc-skill-tab">
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
                      <section class="php-tab etc-skill-tab">
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
