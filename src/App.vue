<template>
  <div class="wrap" id="portFolioContainer">
    <Header></Header>
    <Info></Info>
    <About></About>
    <Career></Career>
    <Skill></Skill>
    <Project></Project>
  </div>
</template>
<script setup>
import Header from './components/header/Header'
import Info from './components/section/MainIntro'
import About from './components/section/About'
import Career from './components/section/Career'
import Skill from './components/section/Skill'
import Project from './components/section/Project'
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
</style>
