import {
  onBeforeUnmount,
  onMounted,
  ref,
  type ComponentOptions,
  type DefineComponent,
  type SetupContext,
} from 'vue'
import Typed from 'typed.js'

import styles from '/assets/scss/components/loading/Loading.module.scss'
import mediaStyles from '/assets/scss/components/loading/LoadingMedia.module.scss'


const Loading: ComponentOptions = {
  name: 'Loading',
  emits: {
    finished: () => true,
  },
  setup(_, { emit }: SetupContext) {
    // Vue의 라이프사이클 훅과 반응형 참조(ref) 불러오기
    const el = ref<HTMLElement | null>(null)
    const bar = ref<HTMLElement | null>(null)
    let typed: Typed | null = null

    onMounted(() => {
      if (!el.value) {
        return
      }

      typed = new Typed(el.value, {
        strings: ['2025 LEE KIWON PORTFOLIO'],
        typeSpeed: 60,
        loop: false,
        smartBackspace: false,
        showCursor: false,
      })

      // 3초 후 로딩 끝 알림
      setTimeout(() => {
        typed && typed.destroy()
        emit('finished')
      }, 3000)
    })

    // 컴포넌트가 사라지기 직전에 실행될 정리 작업
    onBeforeUnmount(() => {
      // typed.js 인스턴스가 있으면 메모리 누수 방지를 위해 파괴(destroy)
      typed && typed.destroy()
    })

    return () => (
      <section class={`${styles['loading-page']} ${mediaStyles['loading-page']} ${styles['loading']}`}>
        <ul class={`${styles['intro-text-box']} ${mediaStyles['intro-text-box']}`}>
          <li>
            <h2 ref={el}></h2>
            <p>Vue.js로 만들어진 포트폴리오 입니다.</p>
          </li>
        </ul>
        <section class={`${styles['progress']}`}>
          <div class={`${styles['bar']}`} ref={bar}></div>
        </section>
      </section>
    )
  },
}

export default Loading as DefineComponent
