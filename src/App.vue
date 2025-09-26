<template>
  <div class="wrap" id="portFolioContainer">
    <transition name="fade">
      <Loading v-if="isLoading" @finished="onLoaded"></Loading>

      <div v-else>
        <Header></Header>
        <Info></Info>
        <About></About>
        <Career></Career>
        <Skill></Skill>
        <Project></Project>
        <Footer></Footer>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Loading from './components/loading/Loading'
import Header from './components/header/Header'
import Info from './components/section/MainIntro'
import About from './components/section/About'
import Career from './components/section/Career'
import Skill from './components/section/Skill'
import Project from './components/section/Project'
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
