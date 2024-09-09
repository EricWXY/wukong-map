import './assets/main.scss'

import App from './App.vue'
import { setupMock } from '@/mocks'

setupMock()

createApp(App).use(createPinia()).mount('#app')
