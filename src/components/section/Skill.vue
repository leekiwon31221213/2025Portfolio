<template>
  <section id="skill" class="section4">
    <div class="skill__inner">
      <h1 lang="en">Skill & Tool</h1>
      <p class="desc">
        웹퍼블리싱 기초부터 모던 프론트엔드 기술까지 <br />
        시멘틱 태그를 활용한 기본에 충실한 마크업과 스타일링부터, 최신 프레임워크와 렌더링 기법을
        적용한 현대적인 웹 개발까지 폭넓게 다룹니다.
      </p>

      <ul class="skills-box">
        <!-- 스킬 -->
        <li class="skill__inner front-skill glass glass">
          <ul class="skill-list">
            <li>
              <div class="icon-box front">
                <img :src="front.icon" :alt="front.alt" />
              </div>
              <h3>{{ front.title }}</h3>
            </li>
            <li v-for="(skill, index) in front.skills" :key="index" :type="skill.type">
              <p class="skill-name" lang="en">{{ skill.name }}</p>
              <div class="skill-level">
                <div class="skill-bar" :style="{ '--target-width': skill.level + '%' }">
                  <span class="skill-text">{{ skill.level }}%</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <!-- 디자인 -->
        <li class="skill__inner design-skill glass">
          <ul class="skill-list">
            <li>
              <div class="icon-box design">
                <img :src="design.icon" :alt="design.alt" />
              </div>
              <h3>{{ design.title }}</h3>
            </li>
            <li v-for="(skill, index) in design.skills" :key="index">
              <p class="skill-name" lang="en">{{ skill.name }}</p>
            </li>
          </ul>
        </li>
        <!-- 협업 -->
        <li class="skill__inner collaboration-skill glass">
          <ul class="skill-list">
            <li>
              <div class="icon-box collaboration">
                <img :src="collaboration.icon" :alt="collaboration.alt" />
              </div>
              <h3>{{ collaboration.title }}</h3>
            </li>
            <li v-for="(skill, index) in collaboration.skills" :key="index">
              <p class="skill-name" lang="en">{{ skill.name }}</p>
            </li>
          </ul>
        </li>
        <!-- 기타 -->
        <li class="skill__inner etc-skill glass">
          <ul class="skill-list">
            <li>
              <div class="icon-box etc">
                <img :src="etc.icon" :alt="etc.alt" />
              </div>
              <h3>{{ etc.title }}</h3>
            </li>
            <li v-for="(skill, index) in etc.skills" :key="index">
              <p class="skill-name" lang="en">{{ skill.name }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // 프론트엔드
      front: {
        title: 'Frontend',
        // icon: '@/assets/image/skill/front_icon.svg',
        alt: '',
        skills: [
          { name: 'Html', level: 90, type: 'markup' },
          { name: 'Css/Scss', level: 90, type: 'style' },
          { name: 'Js & jQ', level: 75, type: 'programming' },
          { name: 'Vue', level: 70, type: 'framework' },
          { name: 'Seo', level: 60, type: 'concept' },
          { name: 'Semantic', level: 65, type: 'concept' },
          { name: 'Php', level: 30, type: 'backend' },
        ],
      },
      // 디자인
      design: {
        title: 'Design',
        // icon: '@/assets/image/skill/design_icon.svg',
        alt: '',
        skills: [{ name: 'Photoshop' }, { name: 'Figma' }],
      },
      // 협업툴
      collaboration: {
        title: 'Collaboration',
        // icon: '@/assets/image/skill/collaboration_icon.svg',
        alt: '',
        skills: [{ name: 'GitHub & GitLab' }, { name: 'Jira' }],
      },
      // 기타
      etc: {
        title: 'Etc',
        // icon: '@/assets/image/skill/etc_icon.svg',
        alt: '',
        skills: [{ name: 'React' }],
      },
    }
  },
}
</script>

<style lang="scss">
#skill {
  background-color: $sub-bg;

  .skill__inner {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 25rem;
  }
  h1 {
    padding: 145px 0 35px 0;
    text-align: center;
    margin: 0 auto;
    font-size: 8rem;
    font-weight: 600;
    letter-spacing: 5px;
  }
  p.desc {
    text-align: center;
    line-height: 3.5rem;
    font-size: 2rem;
    color: $dec;
    font-weight: 200;
    margin-bottom: 12.8rem;
  }
  .skills-box {
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
    li {
      display: flex;
      width: calc(100% / 4);
      align-items: flex-start;
    }
    .skill__inner {
      .skill-list {
        width: 100%;

        > li {
          margin-bottom: 15px;
          display: flex;
          width: 100%;
          &:first-child {
            flex-direction: column;
            h3 {
              font-size: 2.1rem;
              font-weight: 600;
              margin-bottom: 1.5rem;
            }
            .icon-box {
              padding: 1.3rem;
              border-radius: 0.8rem;
              margin-bottom: 1.5rem;
              width: 60px;
              height: 60px;
              display: flex;
              justify-content: center;

              &.front {
                background: linear-gradient(133deg, #faab89 0%, #f54a00 100%);
              }
              &.design {
                background: linear-gradient(133deg, #dfbfff 0%, #c084fc 100%);
              }

              &.collaboration {
                background: linear-gradient(133deg, #709cff 0%, #155dfc 100%);
              }
              &.etc {
                background: linear-gradient(133deg, #2f54ce 0%, #9071ff 100%);
              }
            }
          }

          .skill-name {
            font-weight: 200;
            margin-bottom: 1rem;
            width: 200px;
            color: $dec;
            font-size: 1.7rem;
          }

          .skill-level {
            background: #33333370;
            border-radius: 1rem;
            overflow: hidden;
            height: 20px;
            display: flex;
            width: 100%;

            .skill-bar {
              width: 0;
              height: 100%;
              background: linear-gradient(90deg, #ff9966, #822d30);
              border-radius: 1rem;
              display: flex;
              align-items: center;
              justify-content: flex-end;
              padding-right: 5px;
              color: #fff;
              animation: fillBar 2.3s ease-in-out forwards;

              .skill-text {
                font-size: 1.3rem;
                font-weight: 600;
              }
            }
          }
        }
      }

      &.design-skill,
      &.collaboration-skill,
      &.etc-skill {
        .skill-list {
          .skill-name {
            width: 100%;
            background-color: #1e2939;
            padding: 0.9rem 1.8rem;
            border-radius: 1rem;
          }
        }
      }
    }
  }
  .glass {
    @include glass(100%, 485px, 4px, 180%, 2rem, #fff);
    border-radius: 30px;
    padding: 3.5rem 3rem;
  }
}

@keyframes fillBar {
  from {
    width: 0;
  }
  to {
    width: var(--target-width);
  }
}
</style>
