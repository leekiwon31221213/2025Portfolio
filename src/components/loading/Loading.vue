<template>
  <div class="loading">
    <ul class="intro-text-box">
      <li>
        <h2 ref="el"></h2>
      </li>
    </ul>
    <div class="progress">
      <div class="bar" ref="bar"></div>
    </div>
  </div>
</template>

<script setup>
// Vue의 라이프사이클 훅과 반응형 참조(ref) 불러오기
import { onMounted, onBeforeUnmount, ref } from 'vue'
import Typed from 'typed.js'

// 부모(App.vue)에 로딩이 끝났음을 알릴 이벤트 정의
const emit = defineEmits(['finished'])

const el = ref(null)
const bar = ref(null)
let typed = null

onMounted(() => {
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
</script>

<style lang="scss">
.intro-text-box {
  position: relative;
  top: 45%;
  z-index: 8;
  color: #333;
  text-align: center;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: clamp(2.2rem, 2.865vw, 2.4rem);
      font-weight: 600;
      color: $white;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: $point-color;
      @media (max-width: 768px) {
        font-size: clamp(2rem, 3.636vw, 2.2rem);
      }
    }
  }
}

.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 6;

  .progress {
    position: relative;
    top: 50%;
    width: 90%;
    height: 6px;
    background: #eee;
    border-radius: 3px;
    overflow: hidden;
    margin: 0 auto;

    .bar {
      width: 0%;
      height: 100%;
      background: #333;
      animation: loading 3s linear forwards;
    }
  }
}

@keyframes loading {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
