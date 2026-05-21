import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { applySeo } from './utils/seo'

/* 폰트어썸 */
// Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// 사용할 아이콘 불러오기
import { faBars, faXmark, faAngleDown } from '@fortawesome/free-solid-svg-icons'

// Vue 컴포넌트 등록
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// 라이브러리에 아이콘 추가
library.add(faBars, faXmark, faAngleDown)

/* 폰트어썸 끝 */
const app = createApp(App)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(router)

//  페이지 SEO 적용
router.afterEach((to) => {
  applySeo(to.meta)
})

app.mount('#app')
