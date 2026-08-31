import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useRef, type CSSProperties } from 'react'

import SkillLogic from './Skill.logic'
import styles from '/assets/scss/components/section/Skill.module.scss'
import mediaStyles from '/assets/scss/components/section/SkillMedia.module.scss'

const Skill = () => {
  const rootRef = useRef<HTMLElement | null>(null)
  const { front, design, collaboration, etc } = SkillLogic(rootRef)

  return (
    <section
      ref={rootRef}
      id="skill"
      className={`${styles['skill-page']} ${mediaStyles['skill-page']}`}
    >
      <section className={`${styles['skill__inner']} ${mediaStyles['skill__inner']}`}>
        <h2 lang="ko">기술</h2>
        <ul className={`${styles['skills-box']} ${mediaStyles['skills-box']}`}>
          <li
            className={`${styles['skill__inner']} ${mediaStyles['skill__inner']} ${styles['glass']} ${styles['reveal']}`}
          >
            <ul className={`${styles['skill-list']} ${mediaStyles['skill-list']}`}>
              <li>
                <section
                  className={`${styles['icon-box']} ${mediaStyles['icon-box']} ${styles['front']}`}
                >
                  <img
                    src={front.icon}
                    alt={front.alt}
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                  ></img>
                </section>
                <h3>{front.title}</h3>
              </li>
              {front.skills.map((skill, index) => (
                <li key={index} data-type={skill.type}>
                  <p className={`${styles['skill-name']} ${mediaStyles['skill-name']}`} lang="en">
                    {skill.name}
                  </p>
                  <section className={styles['skill-level']}>
                    <div
                      className={styles['skill-bar']}
                      style={{ '--target-width': `${skill.level}%` } as CSSProperties}
                    ></div>
                  </section>
                </li>
              ))}
            </ul>
          </li>
          <li
            className={`${styles['skill__inner']} ${mediaStyles['skill__inner']} ${styles['design-skill']} ${mediaStyles['design-skill']} ${styles['glass']} ${styles['reveal']}`}
          >
            <ul className={`${styles['skill-list']} ${mediaStyles['skill-list']}`}>
              <li>
                <section
                  className={`${styles['icon-box']} ${mediaStyles['icon-box']} ${styles['design']}`}
                >
                  <img
                    src={design.icon}
                    alt={design.alt}
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                  ></img>
                </section>
                <h3>{design.title}</h3>
              </li>
              {design.skills.map((skill, index) => (
                <li key={index}>
                  <p className={`${styles['skill-name']} ${mediaStyles['skill-name']}`} lang="en">
                    {skill.name}
                  </p>
                </li>
              ))}
            </ul>
          </li>
          <li
            className={`${styles['skill__inner']} ${mediaStyles['skill__inner']} ${styles['collaboration-skill']} ${mediaStyles['collaboration-skill']} ${styles['glass']} ${styles['reveal']}`}
          >
            <ul className={`${styles['skill-list']} ${mediaStyles['skill-list']}`}>
              <li>
                <section
                  className={`${styles['icon-box']} ${mediaStyles['icon-box']} ${styles['collaboration']}`}
                >
                  <img
                    src={collaboration.icon}
                    alt={collaboration.alt}
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                  ></img>
                </section>
                <h3>{collaboration.title}</h3>
              </li>
              {collaboration.skills.map((skill, index) => (
                <li key={index}>
                  <p className={`${styles['skill-name']} ${mediaStyles['skill-name']}`} lang="en">
                    {skill.name}
                  </p>
                </li>
              ))}
            </ul>
          </li>
          <li
            className={`${styles['skill__inner']} ${mediaStyles['skill__inner']} ${styles['etc-skill']} ${styles['glass']} ${styles['reveal']}`}
          >
            <ul className={`${styles['skill-list']} ${mediaStyles['skill-list']}`}>
              {etc.skills.map((skill, index) => (
                <li
                  key={index}
                  className={`${styles['skill-li']} ${mediaStyles['skill-li'] ?? ''} ${
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
                  <p className={`${styles['skill-name']} ${mediaStyles['skill-name']}`} lang="en">
                    {skill.name}
                  </p>
                  {skill.name === 'Three.js' ? (
                    <section className={styles['etc-skill-tab']}>
                      <a
                        href="https://github.com/leekiwon31221213/threeJs-3Djs-"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Three.js 공부
                        <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                      </a>
                    </section>
                  ) : null}
                  {skill.name === 'React Native' ? (
                    <section className={styles['etc-skill-tab']}>
                      <a
                        href="https://github.com/leekiwon31221213/stockNewsApp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        React Native 공부
                        <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                      </a>
                    </section>
                  ) : null}
                  {skill.name === 'Php' ? (
                    <section className={styles['etc-skill-tab']}>
                      <a href="http://cute01232.dothome.co.kr/" target="_blank" rel="noreferrer">
                        투두리스트
                        <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                      </a>
                      <a href="https://cute01233.dothome.co.kr/" target="_blank" rel="noreferrer">
                        게시판 만들기
                        <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                      </a>
                      <a href="https://cute012345.dothome.co.kr/" target="_blank" rel="noreferrer">
                        PHP공부 리스트
                        <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
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
}

export default Skill
