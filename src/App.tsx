import { ref, Transition, type ComponentOptions, type DefineComponent } from 'vue'
import { RouterView } from 'vue-router'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Loading from './components/loading/Loading'
import styles from '/assets/scss/app/App.module.scss'
import mediaStyles from '/assets/scss/app/AppMedia.module.scss'


const App: ComponentOptions = {
  name: 'App',
  setup() {
    // 처음 방문 여부 체크
    const isFirstVisit = sessionStorage.getItem('isFirstVisit')
    const isLoading = ref(!isFirstVisit)

    const onLoaded = () => {
      isLoading.value = false
      sessionStorage.setItem('isFirstVisit', 'true')
    }

    return () => (
      <main class={`${styles['portfolio-app']} ${mediaStyles['portfolio-app']} ${styles['root']} ${mediaStyles['root']}`} id="portFolioContainer">
        <Transition name="fade">
          {isLoading.value ? <Loading {...{ onFinished: onLoaded }}></Loading> : null}
        </Transition>
        {!isLoading.value ? (
          <section>
            <Header></Header>
            <RouterView></RouterView>
            <Footer></Footer>
          </section>
        ) : null}
      </main>
    )
  },
}

export default App as DefineComponent
