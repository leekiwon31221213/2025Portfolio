<template>
  <div class="wrap" id="portFolioContainer">
    <transition name="fade">
      <Loading v-if="isLoading" @finished="onLoaded"></Loading>

      <div v-else>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Loading from './components/loading/Loading'
import Header from './components/header/Header'

import Footer from './components/footer/Footer'

const isLoading = ref(true)
const onLoaded = () => {
  isLoading.value = false
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
