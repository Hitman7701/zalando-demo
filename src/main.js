import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faShoppingBag, faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'

library.add(faUser, faHeart, faShoppingBag, faStarHalfAlt, faStar)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
