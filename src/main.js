import { createApp } from 'vue'
import App from './App.vue'

/* 폰트어썸 */
// Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// 사용할 아이콘 불러오기
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

// Vue 컴포넌트 등록
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// 라이브러리에 아이콘 추가
library.add(faAngleDown)

/* 폰트어썸 끝 */
const app = createApp(App)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
