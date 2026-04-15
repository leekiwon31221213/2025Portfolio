<template>
  <Info></Info>
  <About></About>
  <Career></Career>
  <Skill></Skill>
  <Project></Project>
</template>

<script>
import Info from '/src/components/section/MainIntro.vue'
import About from '/src/components/section/About.vue'
import Career from '/src/components/section/Career.vue'
import Skill from '/src/components/section/Skill.vue'
import Project from '/src/components/section/Project.vue'

export default {
  components: {
    Info,
    About,
    Career,
    Skill,
    Project,
  },
}
</script>