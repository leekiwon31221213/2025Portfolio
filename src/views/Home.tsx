import type { ComponentOptions, DefineComponent } from 'vue'

import Info from '/src/components/section/MainIntro'
import About from '/src/components/section/About'
import Career from '/src/components/section/Career'
import Skill from '/src/components/section/Skill'
import Project from '/src/components/section/Project'

const Home: ComponentOptions = {
  name: 'Home',
  setup() {
    return () => (
      <>
        <Info></Info>
        <About></About>
        <Career></Career>
        <Skill></Skill>
        <Project></Project>
      </>
    )
  },
}

export default Home as DefineComponent
