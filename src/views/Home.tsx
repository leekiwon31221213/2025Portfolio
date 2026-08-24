import About from '/src/components/section/About'
import Career from '/src/components/section/Career'
import Info from '/src/components/section/MainIntro'
import Project from '/src/components/section/Project'
import Skill from '/src/components/section/Skill'

const Home = () => {
  return (
    <>
      <Info></Info>
      <About></About>
      <Career></Career>
      <Skill></Skill>
      <Project></Project>
    </>
  )
}

export default Home
