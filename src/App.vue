<template>
  <div class="wrap" id="portFolioContainer">

    <!-- 로딩 -->
    <transition name="fade">
      <Loading v-show="isLoading" @finished="onLoaded"></Loading>
    </transition>

    <!-- 실제 페이지 -->
    <div v-show="!isLoading">
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Loading from './components/loading/Loading'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

// 처음 방문 여부 체크
const isFirstVisit = sessionStorage.getItem('isFirstVisit')

const isLoading = ref(!isFirstVisit)

const onLoaded = () => {
  isLoading.value = false

  sessionStorage.setItem('isFirstVisit', 'true')
}
</script>

<style lang="scss">
body {
  background-color: $main-bg;
  color: $white;
}

:lang(ko) {
  font-family: $font-ko;
}

:lang(en) {
  font-family: $font-en;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>